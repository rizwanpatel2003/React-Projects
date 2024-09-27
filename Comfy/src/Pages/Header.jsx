/* eslint-disable no-unused-vars */
import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <div className="flex w-full h-16 font-serif bg-[#004643] items-center text-white">
  <div className="w-1/4 text-center">
    <button className="bg-[#faf4d3] text-4xl w-11 text-black">C</button>
  </div>

  <div className="w-1/2">
    <ul className="flex justify-evenly text-lg">
      
      <li>  <NavLink to='/'>Home</NavLink></li>
      <li>  <NavLink to='/Product'>Products</NavLink></li>
      <li>  <NavLink to='/About'>About</NavLink></li>
      <li>  <NavLink to='/Cart'>Cart</NavLink></li>
    </ul>
  </div>
  <div className="w-1/6 mx-8 flex justify-evenly">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  </div>
</div>
    )
}

export default Header
