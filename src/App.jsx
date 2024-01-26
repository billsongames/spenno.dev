import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Radiogram from './Components/Projects/Radiogram/Radiogram';
import Contact from './Components/Contact/Contact';


const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "about" element = {<About/>} />
          <Route path = "projects" element = {<Projects />} />
          <Route path = "projects/radiogram" element = {<Radiogram />} />
          <Route path = "contact" element = {<Contact/>} />
        </Routes>    
      </div>
    </BrowserRouter>



  );
}

export default App;
