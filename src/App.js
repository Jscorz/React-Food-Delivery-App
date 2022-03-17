import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Menu from './components/Menu';
import Shop from './components/Shop';
import Service from './components/Service';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
