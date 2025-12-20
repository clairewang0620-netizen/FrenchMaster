
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Could not find root element to mount to.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render the application:", error);
    rootElement.innerHTML = `
      <div style="color: red; font-size: 16px; text-align: center; margin-top: 50px; font-family: sans-serif;">
        页面加载失败，请稍后重试
      </div>
    `;
  }
}
