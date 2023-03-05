import React from 'react'
import { Routes as RouterRoutes, Route } from 'react-router-dom'
import CreatePatient from './pages/CreatePatient'
import Home from './pages/Home'
import Login from './pages/Login'

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route key="home" path="/" element={<Home />} />
      <Route key="login" path="/login" element={<Login />} />
      <Route
        key="create-patient"
        path="/create-patient"
        element={<CreatePatient />}
      />
    </RouterRoutes>
  )
}

export default Routes
