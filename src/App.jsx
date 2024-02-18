import React, {useState, useEffect, useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DarkModeProvider } from "./context/DarkModeContext";

import './App.css';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Radiogram from './Components/Projects/Radiogram/Radiogram';
import NewsDesk from './Components/Projects/NewsDesk/Newsdesk';
import NASA from "./Components/Projects/NASA/NASA"
import Deflektion from "./Components/Projects/Deflektion/Deflektion"
import RotaDroid from './Components/Projects/RotaDroid/Rotadroid';
import InProgress from './Components/Projects/InProgress/InProgress';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <DarkModeProvider>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "about" element = {<About/>} />
            <Route path = "projects">
              <Route index element = {<Projects />} />
              <Route path = "radiogram" element = {<Radiogram />} />
              <Route path = "newsdesk" element = {<NewsDesk />} />
              <Route path = "deflektion" element = {<Deflektion />} />
              <Route path = "nasa" element = {<NASA />} />
              <Route path = "rotadroid" element = {<RotaDroid />} />
              <Route path = "in-progress" element = {<InProgress />} />
            </Route>
            <Route path = "contact" element = {<Contact/>} />
          </Routes>
          <Footer />
          </DarkModeProvider>  
      </div>

    </BrowserRouter>



  );
}

export default App;
