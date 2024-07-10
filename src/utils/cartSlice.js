import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
      addItem:(state,action) =>{
        state.items.push(action.payload);
      },
      removeItem:(state)=>{
        state.items.pop();
      },
      clearCart:(state)=>{
        // redux toolkit - either mutate the existing state or return a new State
        // state.items.length=0; // originalState =[]
         return {items:[]};

      }
    }
})


export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;