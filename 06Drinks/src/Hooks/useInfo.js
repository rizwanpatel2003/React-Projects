import {useState,useEffect} from 'react'

function UseInfo(search) {
    const[data,setdata]=useState([])
    const[error,setError]=useState(null);
    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).then((res)=> res.json()).then((res)=> setdata(res.drinks) ).catch(()=> setError("fuck you"))
    },[search])
    return {data,error}
}

export default UseInfo
