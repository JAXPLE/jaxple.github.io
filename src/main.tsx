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
          <p>코드가 궁금하시다면, <a href="https://github.com/JAXPLE/jaxple.github.io" style="color:#34d399;text-decoration:underline;">https://github.com/JAXPLE/jaxple.github.io</a> 여기로 들어가서 확인해주세요!</p>
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