import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';
const { createRoot } = ReactDOM;

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MainApp />
  // </React.StrictMode>
);
