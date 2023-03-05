import React from 'react'
import { Routes as RouterRoutes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route key="home" path="/" element={<Home />} />
      <Route key="login" path="/login" element={<Login />} />
    </RouterRoutes>
  )
}

export default Routes
