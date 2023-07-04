import { View, Text, StyleSheet, FlatList } from 'react-native'
import {React,useLayoutEffect} from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
const MealsOverView = ({route,navigation}) => {
    const catId=route.params.categoryId;
    const displayMeals= MEALS.filter((item)=>{
        return item.categoryIds.indexOf(catId) >=0;
    })

    useLayoutEffect(()=>{
        setTitle();

    },[navigation,catId])



    function setTitle(){
        const pageTitle = CATEGORIES.find((item)=>item.id===catId).title;
        navigation.setOptions({title:pageTitle});
    }
    function renderItem({item}){
        return (
          <MealItem item={item}/>
        )
    }
  return (
        <FlatList
        data={displayMeals} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={1}
        >

        </FlatList>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})

export default MealsOverView