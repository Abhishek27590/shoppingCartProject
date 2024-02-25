import { createSlice } from "@reduxjs/toolkit";


export const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state,actions)=>{return[...state,actions.payload]},
        remove:(state,actions)=>{
            return state.filter((s)=>s.id!=actions.payload)
        }
    }
})

export const {add,remove}=CartSlice.actions
export default CartSlice.reducer