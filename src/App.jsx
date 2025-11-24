import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Test from './Pages/Test'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />

        </Route>
      </Routes>
    </>
  )
}

export default App