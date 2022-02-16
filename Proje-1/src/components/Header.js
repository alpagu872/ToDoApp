
import {View,Text,StyleSheet} from 'react-native'
import React,{memo} from 'react'

const Header = ({length}) => {
    return(
        <View style = {styles.header}>
            <Text style = {styles.title}>Yapılacaklar</Text>
            <Text style = {styles.counter}>{length}</Text>
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:15,
    paddingVertical:10
},
title: {
    fontSize:28,
    color: 'orange',
    fontWeight: 'bold',
},
counter:{
    color: 'orange',
    fontWeight: '500',
    fontSize:18
}
})