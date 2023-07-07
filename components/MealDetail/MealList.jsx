import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import MealItem from '../MealItem'

export default function MealList({items}) {
    function renderItem({item}){
        return (
          <MealItem item={item}/>
        )
    }
  return (
        <FlatList
        data={items} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={1}
        >

        </FlatList>
  )
}

const styles = StyleSheet.create({})