// export default App
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Body from './Components/Body'
import { nanoid } from 'nanoid';

function App() {
  let [data, setData] = useState([
    {
      id:nanoid(),
      img: "https://www.course-api.com/images/tours/tour-1.jpeg",
      name: "Best of Paris in 7 Days Tour",
      price: "$700",
      para: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days",
      showMore: false,
    },
    {
      id:nanoid(),
      img: "https://www.course-api.com/images/tours/tour-2.jpeg",
      name: "Best of Ireland in 14 Days Tour",
      price: "$1,400",
      para: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      showMore: false,
    },
    {
      id:nanoid(),
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagOHpgLqgMx_sT3gFHFL1VmI6qfCLSriSSg&s",
      name: "Best of Salzburg & Vienna in 8 Days Tour",
      price: "$1,000",
      para: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
      showMore: false,
    },
    {
      id:nanoid(),
      img: "https://www.course-api.com/images/tours/tour-4.jpeg",
      name: "Best of Rome in 7 Days Tour",
      price: "$900",
      para: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
      showMore: false,
    },
    {
      id:nanoid(),
      img: "https://www.course-api.com/images/tours/tour-5.jpeg",
      name: "Best of Poland in 10 Days Tour",
      price: "$1,200",
      para: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
      showMore: false,
    }
  ]);

  const notInterested = (itemId) => {
    setData(data.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <h1 className='text-white  text-3xl font-semibold hover:font-bold'>Our Tours</h1>
      <div className="w-full bg-black flex flex-wrap flex-row">
        {data.map((item) => (
          <div className="w-1/4 bg-white m-5 p-4 shadow-lg hover:shadow-white" key={item.id}>
            <span>
              <img src={item.img} alt="" />
              <p>{item.price}</p>
            </span>
            <h3>{item.name}</h3>
            <span>
              <p>
                {item.showMore ? item.para : item.para.substring(0, 197)}
                <span>
                  <button
                    onClick={() => {
                      setData(
                        data.map((i) =>
                          i.id === item.id ? { ...i, showMore: !i.showMore } : i
                        )
                      );
                    }}
                  >
                    {item.showMore ? "Less!" : "More!"}
                  </button>
                </span>
              </p>
            </span>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-4"
              onClick={() => {
                console.log(item.id);
                notInterested(item.id);
              }}
            >
              not interested
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;