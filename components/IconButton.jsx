import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function IconButton({onPress}) {
  return (
    <Pressable  onPress={onPress} style={({pressed})=>pressed?styles.pressed:null}>
        <Ionicons name='star' size={24} color={'yellow'}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.7,
    }
})