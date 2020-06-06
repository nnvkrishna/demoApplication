// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import LoginComponent from './Components/Login/index';

import AppRoutes from './Common/routes' 


function App() {
  return (
    <div className="App">
     <AppRoutes />
    </div>
  );
}

export default App;
