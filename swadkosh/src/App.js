import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sweets from './components/Sweets';
import Deserts from './components/Deserts';
import DryFood from './components/DryFood';
import Biscuits from './components/Biscuits';
import MinuteKhaana from './components/MinuteKhaana';


function App() {
  return (
    <>
    <Router>
      <Header Location="Kharghar"/>
      <Navbar />
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Sweets' element={<Sweets/>}/>
          <Route exact path='/Deserts' element={<Deserts/>}/>
          <Route exact path='/DryFood' element={<DryFood/>}/>
          <Route exact path='/Biscuits' element={<Biscuits/>}/>
          <Route exact path='/Sweets' element={<Sweets/>}/>
          <Route exact path='/Minute Khaana' element={<MinuteKhaana/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
