import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { StrictMode } from 'react';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <StrictMode>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </StrictMode>
      </Router>
    </>
  );
}

export default App;
