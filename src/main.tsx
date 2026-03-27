import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (!import.meta.env.DEV) {
  setInterval(function () {
    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();
    if (after - before > 100) {
      document.body.innerHTML = `
        <div style="background-color:#000;color:#10b981;height:100vh;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:20px;flex-direction:column;">
          <p>[System Auth Failed]</p>
          <p>나빠용! 싫어용!</p>
        </div>
      `;
    }
  }, 1000);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)