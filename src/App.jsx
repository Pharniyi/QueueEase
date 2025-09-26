//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import AdminDashboard from "./pages/AdminDashboard"
import UserDashboard from "./pages/UserDashboard"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
  )

}
export default App
