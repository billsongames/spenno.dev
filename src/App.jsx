import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/projects" element = {<Projects/>} />
        </Routes>    
      </div>
    </BrowserRouter>



  );
}

export default App;
