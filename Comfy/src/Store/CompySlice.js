/* eslint-disable no-unused-vars */
import { createSlice,nanoid } from "@reduxjs/toolkit";
import UseInfo from "../Hooks/useInfo";

const initialState= {
    data:[],
    
        indo:{
            Title:"xyz",
            Price:"99$",
            Desp:"xyz",
            img:"",
    
      }
}

export const CompySlice=createSlice({
   name:"Comfy",
   initialState,
   reducers:{
    setData: (state, action) => {
        state.data = action.payload;
        // state.data = action.payload.map((item) => ({ ...item, id: nanoid() }));
      },
       setIndo:(state,action)=>{
        state.indo = action.payload;
    }
   }
})

export const{setData,setCategory,setIndo}=CompySlice.actions

export default CompySlice.reducer