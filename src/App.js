import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Menu from './components/Menu';
import Shop from './components/Shop';
import Service from './components/Service';
import Sidebar from './components/Sidebar';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/service' element={<Service />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
