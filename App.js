import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'
import News from './components/News.Js'



const App = () => {
  return (
    <View style={styles.container}>
      <FlatList_HeaderFooter/>
      <News/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,   
    justifyContent:'center',    
    alignItems:'left'   
 }
})