import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Example_useEffect from './assets/components/Example_useEffect';

const App = () => {
  return (
    <View style={styles.container}>
      <Example_useEffect/>


    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  }
 })
