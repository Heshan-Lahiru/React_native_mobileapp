
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';
import compilor from './compilor';
import OutputScreen from './OutputScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="compilor" 
          component={compilor} 
          options={{ title: 'Python Compiler' }} 
        />
        <Stack.Screen 
          name="OutputScreen" 
          component={OutputScreen} 
          options={{ title: 'Output' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
