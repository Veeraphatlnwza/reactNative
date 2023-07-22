import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import Login from './components/Login';

export default function App() {
  return (
    <View style={styles.container}>

      <Form/>
      <Login/>
    </View>
  );
}
