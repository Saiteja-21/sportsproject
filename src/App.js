import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Popularplayer from "./components/Popularplayer";
import Dataprovider from "./components/Dataprovider";
import Scorepage from "./components/Scorepage";
import { Playercontext } from "./components/Dashboard";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
    <Dataprovider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/popularplayer" element={<Popularplayer />} />

          <Route path="/scorepage" element={<Scorepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
          

        </Routes>
        </Dataprovider>
        
      
    </div>
  );
}

export default App;
