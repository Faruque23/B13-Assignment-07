import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TimelineProvider } from './context/TimelineContext';
import { ToastProvider } from './context/ToastContext';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TimelineProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </TimelineProvider>
    </BrowserRouter>
  </StrictMode>,
);
