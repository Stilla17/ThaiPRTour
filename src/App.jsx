import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Test from './Pages/Test'
import Nedvij from './Pages/Nedvij.jsx';
import Admin from './Pages/Admin.jsx'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/estate' element={<Nedvij />} />
        </Route>
        <Route path='/admin' element={<Admin />} />

      </Routes>
    </>
  )
}

export default App