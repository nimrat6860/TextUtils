import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ FIXED: added Routes, Route
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert'; // (Optional, not used yet)

function App() {
  const [mode, setMode] = useState('light');

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={toggle} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform heading="Enter text to analyze" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
