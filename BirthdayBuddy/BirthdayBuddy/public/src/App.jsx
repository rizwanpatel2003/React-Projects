/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [datas, setDatas] = useState([
    {
      name: "xyz",
      age: 25,
      img: 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2;'
    },
    {
      name: "abc",
      age: 20,
      img: 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2;'
    },
    {
      name: "pqr",
      age: 29,
      img: 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2;'
    },
    {
      name: "ijk",
      age: 21,
      img: 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2;'
    },
    {
      name: "mno",
      age: 22,
      img: 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2;'
    },
  ]);

  return (
    <div className="min-h-screen bg-pink-200 grid place-items-center">
      <h1 className="text-3xl font-bold mb-4">Buddy's Birthday </h1>
      <div className="grid grid-cols-3 gap-4">
        {datas.map((item, index) => {
          return (
            <div className="flex flex-col w-72 h-96 bg-white shadow-md rounded-lg overflow-hidden" key={index}>
              <div className="w-full h-48 bg-red-500">
                <img className="h-full w-full object-cover" src={item.img} alt="" />
              </div>
              <div className="w-full bg-orange-500 p-4">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p>Age: {item.age}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className='btn btn-danger mt-4' onClick={() => {
        console.log("Clearing all...");
        setDatas([]);
      }}>Clear All</button>
    </div>
  );
}

export default App;