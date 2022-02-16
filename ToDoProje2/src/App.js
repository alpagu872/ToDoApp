import React, { useState, useEffect } from "react";
import { View, Text,StyleSheet,FlatList, TouchableOpacity } from "react-native"

import ButtonArea from './components/ButtonSave'
import HeaderSide from './components/HeaderSide'
import TodoList from './components/TodoList'

const App = () => {
  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    const newTodoList = todo.filter(item => item.pressed === false);
    const length = newTodoList.length;
    setCounter(length)
  }, [todo]);

  const deleteHandler = item => {
    setTodo(todo.filter(todoItem => todoItem !== item))
  };

  const renderList = ({ item }) =>

    <TouchableOpacity
      onPress={() => changeStyle(item.id)}
      onLongPress={() => deleteHandler(item)}>
      <TodoList
        list={item}
        press={item.pressed} />
    </TouchableOpacity>

  const changeStyle = id => {
    const newTodo = todo.map(item => {
      if (item.id === id) {
        return { ...item, pressed: true }

      }
      return item;
    })
    setTodo(newTodo)
  }




  return (

    <View style={styles.view}>
      <HeaderSide
        counter={counter} />

      <FlatList data={todo}
        renderItem={renderList} />

      <ButtonArea setTodo={setTodo} todo={todo} />

    </View>


  )
}

export default App

const styles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection: 'column',
    backgroundColor:'#4C68A3'
  }

})