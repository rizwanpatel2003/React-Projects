/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
         let data=useSelector( (state) => state.indo)
            console.log(data.Title,data.Price,data.Desp,data.img)
          
    return (
        <div>
        <div className="flex w-11/12 mx-auto mt-10 h-96 bg-black text-white pl-10 leading-8">
        <div className="w-1/2">
          <h1 className="text-6xl w-full pb-4">
            We are changing the way people shop
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus mollitia maiores perferendis reiciendis hic quis. Perferendis atque sequi aperiam, dolorum velit pariatur omnis rem, excepturi sint magni ea! Nobis, quasi.
          </p>
          <button className="text-black w-28 rounded-lg bg-[#faf4d3] mt-6 p-2"
          >
            Products
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-8/12">
            <img
              src="https://i.pinimg.com/564x/7b/3c/69/7b3c690b193cbda4302ba8d44b073184.jpg"
              className="h-full rounded-3xl m-auto"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://i.pinimg.com/564x/58/e1/80/58e180286f4cbaf3a7cd6e1d817f45a0.jpg"
              className="h-full rounded-3xl"
              alt=""
            />
          </div>
        </div>
      </div>
  
      <div className="mt-20 text-white">
        <h1 className="text-center text-2xl">Featured Products</h1>
        <hr className="bg-gray-600 w-20 h-1 mx-auto self-center" />
      </div>
  
      <div className="grid grid-cols-3 w-11/12 gap-5 mt-20 mx-auto text-center">
        <div className="h-96">
          <img
            src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="rounded-lg h-4/5 mx-auto"
          />
          <h1>Name</h1>
          <h1>$12</h1>
        </div>
        <div className="h-96">
          <img
            src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="rounded-lg h-4/5 mx-auto"
          />
          <h1>Name</h1>
          <h1>$12</h1>
        </div>
        <div className="h-96">
          <img
            src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="rounded-lg h-4/5 mx-auto"
          />
          <h1>Name</h1>
          <h1>$12</h1>
        </div>
      </div>
      </div>
    )
}

export default Home
