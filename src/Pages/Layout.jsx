import React from 'react'
import Nav from '../Components/Nav/Nav'
import { Outlet } from 'react-router'
import FooterList from '../Components/Footer/Footer'

const Layout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <FooterList />
        </div>
    )
}

export default Layout