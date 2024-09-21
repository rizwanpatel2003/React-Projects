/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [data, setdata] = useState([
    {
      id: nanoid(),
      name: "Samsung Galaxy S8",
      price: 399.99,
      img: "https://www.course-api.com/images/cart/phone-1.png",
      count: 1,
    },
    {
      id: nanoid(),
      name: "Google Pixel",
      price: 499.99,
      img: "https://www.course-api.com/images/cart/phone-2.png",
      count: 1,
    },
    {
      id: nanoid(),
      name: "Xiaomi Redmi Note 2",
      price: 699.99,
      img: "https://www.course-api.com/images/cart/phone-3.png",
      count: 1,
    },
    {
      id: nanoid(),
      name: "Samsung Galaxy S7",
      price: 599.99,
      img: "https://www.course-api.com/images/cart/phone-4.png",
      count: 1,
    },
  ]); 
  const remove=(itemId)=>{
    setdata(data.filter((item)=> item.id!=itemId ))
  }

  const incr = (itemId) => {
    setdata(
      data.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  };
  const dcr = (itemId) => {
    setdata(
      data.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
    );
  };
  const sum = data.reduce((acc, item) => acc + item.count, 0);
  const total = data.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col content-center">
      <div className="w-full h-14 bg-blue-500 flex justify-between text-white">
        <h1 className="text-3xl mx-11">Notrex</h1>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-10 mx-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <div className="absolute top-0 right-0 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full">
            {sum}
          </div>
        </div>
      </div>
      <h1 className="text-6xl text-blue-500 text-center">Your Bag</h1>
      <div className="h-96 w-96 bg-blue-400 m-auto flex flex-col">
        {data.map((item) => {
          if(item.count>0){
          return (
            <div className="h-1/5 bg-white m-2 flex" key={item.id}>
              <div className="w-1/5 bg-white m-2 flex content-baseline">
                <img src={item.img} alt="" className="w-full h-full"></img>
              </div>
              <div className="w-1/2 mb-2">
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <button onClick={
                  () => {
                    remove(item.id);
                  }
                }>remove</button>
              </div>
              <div className="w-1/5 b flex flex-col items-center mx">
                <div>
                  <button
                    onClick={() => {
                      incr(item.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                      />
                    </svg>
                  </button>
                  <p className="mx-2">{item.count}</p>
                  <button
                    onClick={() => {
                      dcr(item.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        }
        })}
      </div>
      <hr className="h-px w-96 self-center my-8 bg-gray-200 border-0 dark:bg-gray-400 "></hr>
      <div className="h-12 w-80  m-auto flex justify-between">
        <div className=" text-2xl">
          <p>Total</p>{" "}
        </div>
        <div> {Math.floor(total) + "$"}</div>
      </div>
    </div>
  );
}

export default App;
