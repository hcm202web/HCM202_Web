import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/tailwind.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics/>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
