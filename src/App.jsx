import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Test from './Pages/Test'
import Citizen from './Pages/Citizen'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/citizen" element={<Citizen />} />

        </Route>
      </Routes>
    </>
  )
}

export default App