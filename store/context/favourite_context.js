import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { set } from 'react-native-reanimated'

export const FavouriteContext = React.createContext({
    ids:[],
    add:(id)=>{},
    remove:(id)=>{},
})

export default function FavouriteContextProvider({children}){

    const [favouritesMealId,setFavouritesMealId]=useState([])
    function addFavouritesMealId(id){
        setFavouritesMealId((current)=>{
            return [...current,id]
        })
    }
    function removeFavouritesMealId(id){
        setFavouritesMealId((current)=>current.filter((mealId)=>mealId!=id))
    }
    const value={
        ids:favouritesMealId,
        add:addFavouritesMealId,
        remove:removeFavouritesMealId,
    }
    return (
        <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
    )
}