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
      <main className="text-foreground bg-background">
        <App />
      </main>
    </React.StrictMode>
  );
  console.log('main.jsx: App component rendered successfully');
} catch (error) {
  console.error('main.jsx: Error during rendering:', error);
  throw error;
}


