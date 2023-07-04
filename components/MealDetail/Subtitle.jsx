import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Subtitle = ({ title }) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    subTitle: {
        color: '#754343',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center',

    },
    subTitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        marginHorizontal: 12,
        marginVertical: 4,
    }
})

export default Subtitle