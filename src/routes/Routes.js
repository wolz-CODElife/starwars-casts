import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'

const PageRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<LandingPage />} />
      </Routes>
  )
}

export default PageRoutes