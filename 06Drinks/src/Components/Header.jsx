/* eslint-disable no-unused-vars */
import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Header() {
    return (
     
        <div className="flex h-14 w-full bg-green-500 font-mono">
       <div  className="w-1/3 font-mono text-2xl mx-14">
       <h1>DiscoverDrinks</h1>
       </div>
       <div className="w-1/2 text-xl">
        <ul className="flex
         m-2">
          <li className="mx-2"> <NavLink to='/'>Home</NavLink></li>
           <li className="mx-1"> <NavLink to='/About'> About</NavLink></li>
            <li className="mx-2"><NavLink to='/Newsletter'> NewsLetter</NavLink> </li>
        </ul>
       </div>
  </div>


    )
}

export default Header
