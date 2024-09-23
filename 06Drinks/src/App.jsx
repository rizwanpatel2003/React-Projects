/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import './App.css'
import UseInfo from './Hooks/useInfo'
import Cocktail from './Components/Cocktail';

function App() {
    const[info,setinf0]=useState('margarita');
    const{data,error}=UseInfo(info);
    const[inp,setinp]=useState('');


  return (
    <>
       
     <div className=" h-20 w-96 bg-w  flex items-center shadow-md my-8 hover:shadow-lg m-auto">
  <input type="text" className=" w-72 h-7 mx-3 shadow-md hover:shadow-lg" value={inp} onChange={(e)=> setinp(e.target.value)}/>
  <button className=" bg-green-400 rounded-md p-1" onClick={()=>{
       setinf0(inp);
       setinp('');
  }
  }>Search</button>
</div>

<div className="w-4/5 grid grid-cols-3 gap-4 m-auto font-mono">
  {data.map((item)=>{
    return(
      <div className=" bg-white shadow-md hover:shadow-lg" key={item.idDrink}>
       <img src={item.strDrinkThumb} alt=""/>
       <div className="p-3">
         <h1 className=" text-xl">{item.strDrink}</h1>
         <h2>{item.strGlass}</h2>
         <p>{item.strAlcoholic}</p>
       <NavLink to={`/cocktail/${item.id}`} > <button className=" bg-green-400 rounded-md p-2 hover:bg-white " onClick={
          ()=>{
          <Cocktail item={item}/>
          }
         }>Details</button></NavLink>
       </div>
     </div>
    )
  } )}
    
     
</div>

    </>
  )
}

export default App
