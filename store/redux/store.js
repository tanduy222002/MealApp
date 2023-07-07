import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";

// tạo reducer con bằng Slice
export const favouriteSlice=createSlice({
    name:'Favourite',
    initialState:{
        ids:[]
    },
    reducers:{
        addFavourite:(state,action)=>{
            state.ids.push(action.payload.id)
        },
        removeFavourite:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        },

    }
})
// định nghĩa store
export const store = configureStore({
    // tạo các reducer con trong reducer cha
    reducer:{
        favouriteMeals: favouriteSlice.reducer,
    }
})

export const {addFavourite,removeFavourite} = favouriteSlice.actions
