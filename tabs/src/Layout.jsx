/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
    return (
        <div className="min-h-screen bg-slate-800 flex justify-center">
           <Navbar/>
           <Outlet/>

        </div>
        
    )
}

export default Layout
