// src\main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import AppWithContext from './AppContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWithContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppWithContext>
  </React.StrictMode>
);
