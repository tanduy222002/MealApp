import { View, Text,Pressable, StyleSheet,Platform } from 'react-native'
import React from 'react'

export default function CategoryGridTile({title,id,color,onPress}) {
  return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
        <Pressable onPress={onPress} android_ripple={{color:'#d4ada4'}} style={({pressed})=>[styles.button,pressed?{opacity:0.25}:null]}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRAdius:8,
        // tranh hieu ung tran ra ngoai canh
        overflow:Platform.OS==='android'?'hidden':'visible',
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    }
    ,
    button:{
        flex:1,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
    }
});
