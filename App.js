import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Detail from './components/Detail';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

        <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
