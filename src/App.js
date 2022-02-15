

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <View style={styles.counter}><Text >0</Text></View>

      </View>
      <View>
        <Text>Hii</Text>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a4a4a'

  },
  top_container: {
 
    flexDirection: 'row',
    backgroundColor: 'white',
    


  },

  title: {
    fontSize: 36,
    color: 'orange',
    padding: 12
  },
  counter: {
    justifyContent: 'flex-end',
    
    

  }

});

export default App;
