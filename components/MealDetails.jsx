import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MealDetails = ({ item, textStyle}) => {
    return (
        <View style={styles.detais}>
        <Text style={[styles.detail,textStyle]}>{item.duration}</Text>
            <Text style={[styles.detail,textStyle]}>{item.complexity}</Text>
            <Text style={[styles.detail,textStyle]}>{item.affordability}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detais: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    detail: {
        marginHorizontal: 5,
        color: 'white',
    }
})
export default MealDetails