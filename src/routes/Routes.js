import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Movie from '../pages/Movie'

const PageRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/movie/:id' element={<Movie />} />
      </Routes>
  )
}

export default PageRoutes