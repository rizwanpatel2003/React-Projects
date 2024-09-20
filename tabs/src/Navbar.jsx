/* eslint-disable no-unused-vars */
import React from "react";
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div className="w-1/4 h-44 bg-slate-100 m-5">
            <ul>
            <li>
            <NavLink to="/">
               xyz
            </NavLink >
            </li>
            <li>
            <NavLink to="/ijk">
              ijk
            </NavLink>
            </li>
            <li>
            <NavLink to="/abc">
            abc
            </NavLink>
            </li>
            </ul>
        </div>
    )
}

export default Navbar
