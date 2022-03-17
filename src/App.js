import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route path='/menu'>{/* <Menu /> */}</Route>
        <Route path='/shop'>{/* <Shop /> */}</Route>
        <Route path='/service'>{/* <Service /> */}</Route>
      </Routes>
    </Router>
  );
}

export default App;
