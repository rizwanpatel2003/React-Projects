/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Pages/Header'
function Layout() {
    return (
         <> 
          <Header></Header>
         <Outlet></Outlet>
           </> 
    )
}

export default Layout
