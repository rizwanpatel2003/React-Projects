// /* eslint-disable no-unused-vars */ import React, { useCallback, useState } from 'react'
//   import { useDispatch, useSelector } from 'react-redux';
// import UseInfo from '../Hooks/useInfo';
// import { setData } from '../Store/CompySlice';
//  function ProductList() {
//    const dispactch=useDispatch()
//    const inf0=UseInfo()
//    dispactch(setData(inf0))
//    const data = useSelector(state => state.data);
//    const [products, setProducts] = useState(data.slice(1, 20));
//    const [cat, setCat] = useState('All');
//    const [price, setPrice] = useState('All');
//    const mySet1 = new Set();
// data.forEach(element => {
//   mySet1.add(element.category.name);
// });

 
//    const filterOut = useCallback(() => {
//      let filteredProducts = data.slice(1, 20);
//      if (cat !== 'All') {
//        filteredProducts = filteredProducts.filter(item => item.category.name === cat);
//      }
//      if (price === 'High') {
//        filteredProducts = filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//      } else if (price === 'Low') {
//        filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//      }
//      setProducts(filteredProducts);
//    }, [cat, price, data,setProducts]);
                   
                   
                 

                     
                  

//                   return (
//                    <>
//                    <div className="grid grid-cols-4 w-11/12 bg-gray-800 m-auto gap-2 text-white font-mono my-10">
//         <div>
//           <label htmlFor="pet-select">Search product</label>
//           <input type="text" className="rounded-lg bg-slate-500 h-8 w-full" placeholder="Search by name" />
//         </div>
      
//         <div>
//           <label htmlFor="pet-select">Select Category</label>
//           <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full" onClick={(e)=>  setCat(e.target.value)}>
//             <option value="All">All</option>
//             {Array.from(mySet1).map(x =>{ x.toUpperCase()
//             return <option key={x} value={x}>{x}</option>})}
//           </select>
//         </div>
      
//         <div>
//           <label htmlFor="pet-select">Select Company</label>
//           <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full">
//             <option value="">All</option>
//           </select>
//         </div>
      
//         <div>
//           <label htmlFor="pet-select">Sort By</label>
//           <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full" onClick={(e)=> setPrice(e.target.value)}>
//             <option value="All">All</option>
//             <option value="High">High</option>
//             <option value="Low">Low</option>
//           </select>
//         </div>
      
    
//         <div>
//           <label htmlFor="pet-select">Price:</label>
//           <input type="range" className="rounded-lg bg-slate-500 h-8 w-full accent-green-300" />
//         </div>
      
//         <div>
//           <label htmlFor="pet-select">Free Shipping:</label>
//           <input type="checkbox" name="" id="" className="size-5 mx-20 accent-green-300" />
//         </div>
//         <div>
//           <button className="bg-slate-500 rounded-lg p-1 w-full mt-4" onClick={
//             ()=>{ filterOut(); console.log(cat)}
//           }>Search</button>
//         </div>
//         <div>
//           <button className="bg-slate-500 rounded-lg p-1 w-full mt-4">Search</button>
//         </div>
//              </div>
//                      <div className="grid grid-cols-3 grid-rows-6 gap-6 bg-black">
//                      {products.map((item)=>{
//                      return    (  <div className="bg-black" key={item.id}> 
//                      <img src={item. images[0]} alt="" className="h-2/3 m-auto rounded-xl shadow-sm  hover:shadow-lg shadow-white"/>
//                      <div className="m-auto text-center font-serif text-white my-3 ">
//                         <p>{item.title}</p>
//                         <p>{item.price+'$'}</p>
//                           </div>
//                      </div>
                    
//                      )
//                      })}
//                    </div>
//                    </>
//                   )
//                }
      
//     export default ProductList
   /* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseInfo from '../Hooks/useInfo';
import { setData, setIndo } from '../Store/CompySlice';
import { NavLink } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch();
  const info = UseInfo();
  dispatch(setData(info));

  const data = useSelector(state => state.data);
  const [products, setProducts] = useState(data.slice(1,20));
  const [cat, setCat] = useState('All');
   
  const [price, setPrice] = useState('All');
         // if(products.length<=0){
         //   setProducts(data.slice(1,20));
         // }

  const mySet1 = new Set();
  data.forEach(element => {
    mySet1.add(element.category.name);
  });

  const handleCategoryChange = (value) => {
    setCat(value);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };
  const handleclickedItem=(item)=>{
   dispatch(setIndo({
      Title:item.title ,
      Price: item.price,
      Desp: item.description,
      img: item.images[0],
    }));
  }

  const filterOut = useCallback(() => {
    let filteredProducts = data;
    if (cat !== 'All') {
      filteredProducts = filteredProducts.filter(item => item.category.name === cat);
    } else if(cat==='All'){
              filteredProducts=data.slice(1,20);
    }
    if (price === 'High') {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (price === 'Low') {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    setProducts(filteredProducts);
  }, [cat, price, data, setProducts]);

  return (
    <>
      <div className="grid grid-cols-4 w-11/12 bg-gray-800 m-auto gap-2 text-white font-mono my-10">
        <div>
          <label htmlFor="pet-select">Search product</label>
          <input type="text" className="rounded-lg bg-slate-500 h-8 w-full" placeholder="Search by name" />
        </div>

        <div>
          <label htmlFor="pet-select">Select Category</label>
          <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full" onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="All">All</option>
            {Array.from(mySet1).map(x => (
              <option key={x} value={x}>{x.toUpperCase()}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pet-select">Select Company</label>
          <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full">
            <option value="">All</option>
          </select>
        </div>

        <div>
          <label htmlFor="pet-select">Sort By</label>
          <select id="pet-select" className="rounded-lg bg-slate-500 h-8 w-full" onChange={(e) => handlePriceChange(e.target.value)}>
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label htmlFor="pet-select">Price:</label>
          <input type="range" className="rounded-lg bg-slate-500 h-8 w-full accent-green-300" />
        </div>

        <div>
          <label htmlFor="pet-select">Free Shipping:</label>
          <input type="checkbox" name="" id="" className="size-5 mx-20 accent-green-300" />
        </div>

        <div>
          <button className="bg-slate-500 rounded-lg p-1 w-full mt-4" onClick={filterOut}>
            Search
          </button>
        </div>

        <div>
          <button className="bg-slate-500 rounded-lg p-1 w-full mt-4">Search</button>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-6 gap-6 bg-black">
        {products.map((item) => (
          <div className="bg-black" key={item.id}>
            <img src={item.images[0]} alt="" className="h-2/3 m-auto rounded-xl shadow-sm  hover:shadow-lg shadow-white" />
            <div className="m-auto text-center font-serif text-white my-3">
            <NavLink to='/Product/item'>  <p onClick={()=>{
               handleclickedItem(item);
              }}>{item.title}</p></NavLink>
              <p>{item.price + '$'}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;            