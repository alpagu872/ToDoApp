import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderSide = ({ counter }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.header_text}>Yapılacaklar</Text>
            <Text style={styles.header_text_counter}>{counter}</Text>
        </View>
    )
}

export default HeaderSide

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: 15
    },
    header_text: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fd7e14'
    },
    header_text_counter: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fd7e14',
        paddingRight: 5
    }
})