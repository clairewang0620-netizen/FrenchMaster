
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Could not find root element to mount to.");
} else {
  // Clear any loading states or artifacts
  rootElement.style.display = 'block';
  rootElement.style.opacity = '1';

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render the application during initialization:", error);
    rootElement.innerHTML = `
      <div style="color: #334155; font-size: 16px; text-align: center; padding: 50px 20px; font-family: sans-serif; background: #f8fafc; min-height: 100vh;">
        <div style="font-size: 40px; margin-bottom: 20px;">🇫🇷</div>
        <h2 style="font-weight: 800; margin-bottom: 10px;">应用启动异常</h2>
        <p style="color: #64748b;">抱歉，应用在您的设备上启动时遇到问题。请尝试刷新页面。</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 12px 24px; background: #2563eb; color: white; border: none; border-radius: 12px; font-weight: bold; cursor: pointer;">
          重新加载页面
        </button>
      </div>
    `;
  }
}
