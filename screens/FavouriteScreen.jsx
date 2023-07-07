import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FavouriteContext } from '../store/context/favourite_context';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealDetail/MealList';
import { useSelector } from 'react-redux';
import { favouriteSlice } from '../store/redux/store';
export default function FavouriteScreen() {
  
  const mealList = useSelector((state)=>state.favouriteMeals.ids)
  // const mealCtx= useContext(FavouriteContext)
  const mealItems= MEALS.filter((meal)=>mealList.includes(meal.id))
  return (
    <MealList items={mealItems}></MealList>
  )
}

const styles = StyleSheet.create({})