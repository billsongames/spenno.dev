import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Radiogram from './Components/Projects/Radiogram/Radiogram';
import NASA from "./Components/Projects/NASA/NASA"
import Deflektion from "./Components/Projects/Deflektion/Deflektion"
import RotaDroid from './Components/Projects/RotaDroid/Rotadroid';

import Contact from './Components/Contact/Contact';


const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "about" element = {<About/>} />
          <Route path = "projects">
            <Route index element = {<Projects />} />
            <Route path = "radiogram" element = {<Radiogram />} />
            <Route path = "deflektion" element = {<Deflektion />} />
            <Route path = "nasa" element = {<NASA />} />
            <Route path = "rotadroid" element = {<RotaDroid />} />            
          </Route>        
          <Route path = "contact" element = {<Contact/>} />
        </Routes>    
      </div>
    </BrowserRouter>



  );
}

export default App;
