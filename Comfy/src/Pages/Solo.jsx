/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'

function Solo() {
    let data=useSelector( (state) => state.indo)
            console.log(data.Title,data.Price,data.Desp,data.img)
    return (
       <div className="w-full flex font-mono">
  <div className="w-1/2 flex justify-center">
    <img src={data.img} alt="" className="h-[500px] w-3/4 mt-20" />
  </div>
  <div className="w-1/2 mt-24">
    <p className="text-5xl pb-3">{data.Title}</p>
    <p className="text-3xl pb-3">{data.Price}</p>
    <p className="leading-7">{data.Desp}</p>
    <select name="" id="" className="">
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
      <option value="">4</option>
      <option value="">5</option>
      <option value="">6</option>
      <option value="">7</option>
      <option value="">8</option>
      <option value="">9</option>
      <option value="">10</option>
    </select>
    <button className="bg-red-400 rounded-lg p-2 w-28 mt-10">Add Cart</button>
  </div>
</div> 
    )
}

export default Solo
