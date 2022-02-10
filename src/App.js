import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Library from './page/library';
import Layout from './page/layout01';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Library />} exact />
        <Route path='/layout' element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
