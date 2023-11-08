import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers: {
        add: (state, action)=>{
            state.push(action.payload)
        },
        remove: (state, action)=>{
            return state.filter((item)=>{
                return item.id !== action.payload;
            })
        }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;