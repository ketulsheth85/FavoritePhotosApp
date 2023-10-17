/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import FavoritesScreen from './src/FavoritesScreen';

// Create a stack navigator using createNativeStackNavigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}} // Hide the header for this screen
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{headerShown: false}} // Hide the header for this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
