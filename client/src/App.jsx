import React from 'react';
import './App.css';
import { BrowserRouter as Switch, Route, Routes } from 'react-router-dom';

import Account from './components/Account';
import Cancel from './components/Cancel';
import Prices from './components/Prices';
import Register from './components/Register';
import Subscribe from './components/Subscribe';

function App(props) {
  return (
    <Switch>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Switch>
  );
}

export default App;
