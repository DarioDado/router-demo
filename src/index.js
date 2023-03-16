import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

const DOMrootElement = document.getElementById('root');
const root = ReactDOM.createRoot(DOMrootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
