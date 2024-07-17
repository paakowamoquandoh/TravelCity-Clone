import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes } from "react-router-dom";
import App from './App';
import "./index.css"
import "swiper/css";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes>
      <App />
    </Routes>
  </React.StrictMode>
);
