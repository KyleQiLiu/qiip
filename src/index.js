import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// internal imports
import AOS from "aos";
import "aos/dist/aos.css";

// initialization
AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


