import React from 'react'
import { Routes, Route } from 'react-router' 
import Home from './Pages/Home'
import Citizen from './Pages/Citizen'
import Layout from './Pages/Layout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />       
        <Route path="citizen" element={<Citizen />} />
      </Route>
    </Routes>
  )
}

export default App