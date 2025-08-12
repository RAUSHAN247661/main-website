import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log('main.jsx: Starting application...');

// Simple fallback component that will definitely render
const FallbackApp = () => (
  <div style={{ 
    padding: '20px', 
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  }}>
    <h1>Q FACT</h1>
    <p>Loading application...</p>
    <div style={{ 
      width: '40px', 
      height: '40px', 
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const root = document.getElementById("root");
console.log('main.jsx: Root element found:', root);

if (!root) {
  console.error('main.jsx: Root element not found!');
  // Create a fallback root if none exists
  const fallbackRoot = document.createElement('div');
  fallbackRoot.id = 'root';
  document.body.appendChild(fallbackRoot);
  console.log('main.jsx: Created fallback root element');
}

try {
  console.log('main.jsx: Creating React root...');
  const reactRoot = ReactDOM.createRoot(root || document.getElementById('root'));
  console.log('main.jsx: React root created successfully');
  
  console.log('main.jsx: Rendering App component...');
  
  // First render a simple fallback to ensure something shows
  reactRoot.render(<FallbackApp />);
  
  // Then try to render the full app
  setTimeout(() => {
    try {
      reactRoot.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log('main.jsx: App component rendered successfully');
    } catch (appError) {
      console.error('main.jsx: Error rendering App component:', appError);
      // Keep the fallback if the main app fails
      reactRoot.render(<FallbackApp />);
    }
  }, 100);
  
} catch (error) {
  console.error('main.jsx: Critical error during rendering:', error);
  // Emergency fallback - render directly to body
  try {
    const emergencyRoot = document.createElement('div');
    emergencyRoot.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif; text-align: center;">
        <h1>Q FACT</h1>
        <p>Something went wrong. Please refresh the page.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
    document.body.appendChild(emergencyRoot);
  } catch (emergencyError) {
    console.error('main.jsx: Emergency fallback also failed:', emergencyError);
  }
}


