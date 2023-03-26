import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from '../user/Login';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
