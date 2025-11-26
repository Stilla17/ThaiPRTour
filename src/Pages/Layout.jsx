import React from 'react'
import { Outlet } from 'react-router'  
import FooterList from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet /> {/* This renders nested routes */}
      <FooterList />
    </div>
  )
}

export default Layout