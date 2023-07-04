import { Platform, StyleSheet, Image, View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails';
export default function MealItem({ item }) {
    const navigation = useNavigation();
    function onPress() {
        navigation.navigate('MealDetail', {item:item})
    }
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [pressed ? { opacity: 0.25 } : null]} onPress={onPress} >
                <View >
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <MealDetails item={item} textStyle={{color:'black', fontWeight:'bold'}}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.35,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'

    },
    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 5,
    },
  
})
