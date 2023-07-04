import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
export default function CategoriesScreen({navigation}) {

    function renderItem({ item }) {
        function pressHandler(){
            navigation.navigate("MealsOverView",{
                categoryId: item.id,
            });
        }
        return (
            <CategoryGridTile
                title={item.title}
                color={item.color}
                id={item.id}
                onPress={pressHandler} 
            />
        );
    }




    return (
        <FlatList
            style={styles.flatlist}
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            numColumns={2}
        >
        </FlatList>
    )
}



const styles = StyleSheet.create({
    flatlist: {
        // backgroundColor: '#FFF',
    }
});
