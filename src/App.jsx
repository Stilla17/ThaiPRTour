import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Citizen from './Pages/Citizen'
import Admin from './Pages/Admin.jsx';
import Nedvij from './Pages/Nedvij.jsx'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/citizen" element={<Citizen />} />
          <Route path='estate' element={<Nedvij />} />
        </Route>
        <Route path='/admin' element={<Admin />} />

      </Routes>
    </>
  )
}

export default App