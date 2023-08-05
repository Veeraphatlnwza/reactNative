import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Example_useEffect = () => {

    conts[data, setData] = useState([]);

    useEffect(()=>{
        //Fetch data from API useing axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                //Handle successful response
                setData(response.data);

            })
            .catch(()=>{
                //Handle error
                console.error('error fetching data:',error);
            })


    },[]) //The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post from API:</Text>
      {
        data.map((post)=>(
            <View key={post.id} style={styles.post}>
                <text style={styles.postTitle}>{post.title}</text>
                <text>{post.body}</text>
            </View>

        ))
      }

    </View>
  )
}

export default Example_useEffect

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