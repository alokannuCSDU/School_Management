// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Activities from './components/Activities';
import Achievements from './components/Achievements';
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
