import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Quote from './components/Quote'
import Home from './components/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/quote' element={<Quote />} />
    </Routes>
  
  </BrowserRouter>
    
)
