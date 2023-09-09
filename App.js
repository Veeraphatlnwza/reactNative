import { Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screen/HomeScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#008b8b",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="FirstPage"
          component={HomeScreen}
          options={{ title: "OverView" }}
          initialParams={{itemId:'43'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
