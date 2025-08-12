import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log('main.jsx: Starting application...');

const root = document.getElementById("root");
console.log('main.jsx: Root element found:', root);

if (!root) {
  console.error('main.jsx: Root element not found!');
  throw new Error("Root element not found");
}

try {
  console.log('main.jsx: Creating React root...');
  const reactRoot = ReactDOM.createRoot(root);
  console.log('main.jsx: React root created successfully');
  
  console.log('main.jsx: Rendering App component...');
  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('main.jsx: App component rendered successfully');
} catch (error) {
  console.error('main.jsx: Error during rendering:', error);
  // Simple fallback
  root.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Q FACT</h1>
      <p>Something went wrong. Please refresh the page.</p>
      <button onclick="window.location.reload()" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `;
}


