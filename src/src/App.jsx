import React from 'react'
import {Routes, Route } from "react-router";
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainlayOut from './components/MainlayOut';

const App = () => {
  return (
<>
<Routes>
  <Route element={<MainlayOut/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
  </Route>
</Routes></>  
)
}

export default App