

import React, { useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Action from './components/Action'
import Header from './components/Header'
import Task from './components/Task'

function App() {
  const keyExtractor = item => item.id.toString();

  const [tasks, setTasks] = useState([]);

  const length = tasks.filter(item => item.completed === false).length;

  const renderItem = ({ item }) => (
    <Task task={item} completedTask={completedTask} deleteTask={deleteTask} />

  )

  const addTask = text => {

    const newTask = { id: new Date().getTime(), text, completed: false }
    setTasks([...tasks, newTask])
  }

  const completedTask = id => {
    const item = tasks.find(item => item.id === id);

    if (item.completed) {
      item.completed = false;
    } else {
      item.completed = true;
    }

    setTasks(tasks.map(task => (task.id === id ? item : task)));
  }
  const deleteTask = id => {
    setTasks(tasks.filter(item => item.id !== id))
  }



  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Header length={length} />

      <FlatList
        data={tasks}
        keyExtractor={keyExtractor}
        renderItem={renderItem} />

      <Action addTask={addTask} />


    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a4a4a'

  },
});

export default App;
