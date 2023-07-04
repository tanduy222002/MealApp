import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function List({data}) {
  return data.map((dataPoint)=>(
    <View key={dataPoint} style={styles.container}>
        <Text style={styles.text}>{dataPoint}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
    container:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:8,
        marginVertical:4,
        backgroundColor:'#e2b497'
    },
    text:{
        textAlign:'center',
        color:'#351401',
        fontWeight:'bold',
    }
})