import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Register from './Pages/Register'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound  />} />
      </Routes>
    </>
  )
}

export default App