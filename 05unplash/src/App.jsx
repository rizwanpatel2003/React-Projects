/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

import './App.css';
import UseInfo from './Hooks/useInfo';

function App() {
  const [results, setresults] = useState("office");
  const { data, loading, error } = UseInfo(results);
 
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center">
        <h1 className="text-center text-white text-6xl m-9">Imagica Images</h1>
        <div className="flex items-center">
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search anything" value={results} onChange={(e) => setresults(e.target.value)}></input>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9 bg-gray-800 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center">
        <h1 className="text-center text-white text-6xl m-9">Imagica Images</h1>
        <div className="flex items-center">
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search anything" value={results} onChange={(e) => setresults(e.target.value)}></input>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9 bg-gray-800 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <h1 className="text-center text-white text-6xl m-9">Imagica Images</h1>
      <div className="flex items-center">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search anything" value={results} onChange={(e) => setresults(e.target.value)}></input>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9 bg-gray-800 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
      <div className="w-full flex flex-wrap m-9 bg-slate-800">
        {data.map((element) => {
          return (
            <div className="w-1/3 h-56" key={element.id}>
              <img src={element.urls.small} alt="" className="p-3 w-full h-full" />
            </div>
          );
        })}
      </div>
      <button className=' text-white' onClick={() => {
        console.log(data);
      }}>fuck</button>
    </div>
  );
}

export default App;