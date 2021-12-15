import React,{useState} from 'react';
import './App.css';
import ObjectUseState from './Objects';
import ArrayUseState from './Array';
import CustomHooks from './useArray/CustomHooks';
import Navbar from './Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  
  const [mode,setMode] = useState('light');

  const toggelemode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      
    }else{
      setMode('light')
      document.body.style.backgroundColor ='lightblue';
    }
  }

  return (
    <>
    <div className='App'>
    <BrowserRouter>
        <Navbar toggelemode={toggelemode} />
        <Routes>
          <Route path="/ArrayUseState" element={<ArrayUseState />} />
          <Route path="/ObjectUseState" element={<ObjectUseState />} />
          <Route path="/CustomHooks" element={<CustomHooks  />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )}

export default App;
