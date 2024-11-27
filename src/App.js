//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Textform from './components/Textform';
import Alert from './components/Alert';
import React from "react";
function App() {
const[mode,setMode]=useState('light');
const toggle=()=>
{
  if(mode=='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
}
  return (
<>
  <Navbar title="TextUtils" mode={mode} togglemode={toggle}/>
  <Textform mode={mode}/>
    {/*<Routes>
    <Route path="/about" element={<About />} /> 
    <Route path="/" element={<Textform heading="Enter text to analyze" mode={mode} />} />
    </Routes>
    
</Router>*/}
 </>
  );
}
export default App;
