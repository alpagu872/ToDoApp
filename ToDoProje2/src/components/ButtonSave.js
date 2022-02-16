import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

const ButtonArea = ({ todo, setTodo }) => {

    const [todoValue, setTodoValue] = useState("")
    const [color, setColor] = useState('#808080')

    const Separator = () => (
        <View style={styles.separator} />
    );

    const handleSumbit = (item) => {
        if (item === "") {
            return Alert.alert("Lütfen burayı doldurun")
        }
        else if (todo.some(todoItem => todoItem.title === item)) {
            return Alert.alert("Halihazırda var.")
        } else {
            const newTodo = {
                id: new Date().getTime().toString(),
                title: todoValue,
                pressed: false
            }
            setTodo([...todo, newTodo])
            setTodoValue("")
            setColor('#808080')
        }
    }

    return (
        <View style={styles.view}>
            <TextInput placeholder="Yapılacaklar"
                style={styles.text_input}
                value={todoValue}
                onChangeText={setTodoValue} />
            <Separator></Separator>

            <View style={styles.button}>
                <Button title='Kaydet'
                    color='#4C68A3'
                    onPress={() => handleSumbit(todoValue)} />

            </View>
        </View>
    )

}

export default ButtonArea


const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
        margin: 7,
        backgroundColor: '#A5CBDF',
        borderColor: '#A5CBDF',
        borderRadius: 8
    },
    button: {
        padding: 18

    },
    text_input: {
        paddingBottom: 5,
        paddingTop: 9,
        paddingLeft: 20

    },
    seperator: {
        marginVertical: 2,
        marginHorizontal: 15,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth

    }
})