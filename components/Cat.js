import { View, Text } from 'react-native'
import React from 'react'

const getFullName = (fn,sn,tn) =>{
    return fn + "" + sn + "" +tn;
};

const CatName = () => {
    return <text>Hello, I am {getFullName("Lily","Louis","Luca")}!</text>
};


const Cat = () => {
  return (
    <View>
      <Text>Cat</Text>
    </View>
  )
}

export default CatName;