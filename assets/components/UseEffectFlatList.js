import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectFlatList = () => {

    conts[data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                //Handle successful response
                setData(response.data);
                setIsloading(false);
            })
            .catch(()=>{
                //Handle error
                console.error('error fetching data:',error);
                setIsloading(false);
            })
    },[])

    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="0000ff"/>
            </View>
        );
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts from API useing FlatList</Text>
      <FlatList
        data={data}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
            <View style={styles.post}>
                <text style={styles.postTitle}>{item.title}</text>
                <text>{item.body}</text>
            </View>

        )}

      />

    </View>
  )
}

export default UseEffectFlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,

    },
    post:{
        marginBottom: 20,
        padding:10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
})