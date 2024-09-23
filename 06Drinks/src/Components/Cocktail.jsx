/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
function Cocktail( item ) {
    return (
      <>
      
<div className="flex justify-center">
<NavLink to='/'>  <button className="bg-green-400 rounded-lg p-1">Back Home</button> </NavLink>
</div>

<h1 className="text-xl text-center m-5">{item.strDrink}</h1>

<div className='grid grid-cols-2  font-serif'>
  <div className=''>
    <img src={item.strDrinkThumb} className="w-4/5 m-2" />
  </div>
  <div className='leading-10 '>
  <h3>name : {item.strDrink}</h3>
    <h3>category:{item.strCategory}</h3>
    <h4>glass:{item.strGlass}</h4>
    <p>info: {item.strAlcoholic}</p>
    <p>Ingredient:x</p>
    <p>Instruction:{item.strInstructions}</p>
  </div>
   </div>
      </>
    )
}

export default Cocktail
