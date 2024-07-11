import React from 'react';
import './app.css';
import SearchBox from './SearchBox'; 

function MainApp() {
  return (
    <div className="main-container">
      <div className="wind-effect">
        <div className="wind"></div>
      </div>
      <div className="rain-effect">
        <div className="rain"></div>
      </div>
      <div className="thunder">
        <i className="fas fa-bolt"></i>
      </div>
      <SearchBox />
    </div>
  );
}

export default MainApp;
