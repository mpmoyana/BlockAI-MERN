// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateBlock from './components/CreateBlock';
import Blockchain from './components/Blockchain';
import DetectAnomalies from './components/DetectAnomalies';

const App = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-block" element={<CreateBlock />} />
      <Route path="/blockchain" element={<Blockchain />} />
      <Route path="/detect-anomalies" element={<DetectAnomalies />} />
    </Routes>
  </Router>
);

export default App;
