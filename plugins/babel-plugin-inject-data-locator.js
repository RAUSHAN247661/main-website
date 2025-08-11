import { SourceMapConsumer } from 'source-map-js';
import threeJsComponents from './threejs-components.js';

export default function (babelAPI, options) {
  const t = babelAPI.types;
  babelAPI.assertVersion(7);

  const consumerHolder = { consumer: undefined };
  const contextStack = [];

  const isThreeJsComponent = (name) => threeJsComponents.has(name);
  const isInThree = () => contextStack.length > 0 && contextStack[contextStack.length - 1]?.isThreeJsContext === true;
  const pushCtx = (isThree) => contextStack.push({ depth: contextStack.length, isThreeJsContext: isThree });
  const popCtx = () => contextStack.pop();

  return {
    name: 'inject-data-locator-original-source',
    post() {
      consumerHolder.consumer = undefined;
    },
    pre(file) {
      if (options?.inputSourceMap) {
        try {
          const rawMap = typeof options.inputSourceMap === 'string' ? JSON.parse(options.inputSourceMap) : options.inputSourceMap;
          consumerHolder.consumer = new SourceMapConsumer(rawMap);
        } catch (err) {
          console.warn(`[inject-data-locator-original-source] Failed to initialize SourceMapConsumer for ${file?.opts?.filename}:`, err?.message);
          consumerHolder.consumer = undefined;
        }
      } else {
        consumerHolder.consumer = undefined;
      }
    },
    visitor: {
      JSXElement: {
        enter(path, state) {
          const opening = path.node.openingElement;
          let elementName = 'Unknown';
          if (t.isJSXIdentifier(opening.name)) elementName = opening.name.name;
          else if (t.isJSXMemberExpression(opening.name)) elementName = opening.name.property.name;
          if (elementName === 'Fragment') return;

          const isThree = isThreeJsComponent(elementName);
          pushCtx(isThree || isInThree());
          if (isInThree()) return;

          const consumer = consumerHolder.consumer;
          const attrs = opening.attributes;
          const filename = state.file?.opts?.filename || 'unknown';
          let filePath = filename;
          const srcIndex = filename.lastIndexOf('/src/');
          if (srcIndex !== -1) filePath = filename.substring(srcIndex + 1);
          else filePath = filename.split('/').pop() || filename;

          const hasLocator = attrs.some((attr) => t.isJSXAttribute(attr) && attr.name.name === 'data-locator');
          if (!hasLocator && path.node.loc) {
            const { start } = path.node.loc;
            let finalLine = start.line;
            let finalColumn = start.column;
            let mapped = false;
            if (consumer) {
              try {
                const orig = consumer.originalPositionFor({ column: start.column, line: start.line });
                if (orig && orig.line != null && orig.column != null) {
                  finalLine = orig.line;
                  finalColumn = orig.column;
                  mapped = true;
                }
              } catch (err) {
                console.warn(`[inject-data-locator-original-source] Error during source map lookup for ${elementName} in ${filename}:L${start.line}:C${start.column}`, err?.message);
              }
            }
            const locatorValue = `${filePath}:${elementName}:${finalLine}:${finalColumn}`;
            const dataLocatorAttr = t.jsxAttribute(t.jsxIdentifier('data-locator'), t.stringLiteral(locatorValue));
            opening.attributes.push(dataLocatorAttr);
          }
        },
        exit() {
          popCtx();
        },
      },
    },
  };
}


