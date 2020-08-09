import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import Timer from './Timer'
import YouTube from './YouTube.js'
import MainRouter from './MainRouter';



function App() {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
      

  );
}

export default App;
