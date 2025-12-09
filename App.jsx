/**
 * ByteSize React Native App
 * 
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "./global.css"

// Import screens
import Home from './src/screens/Home';
import Lessons from './src/screens/Lessons';
import Profile from './src/screens/Profile';
import CSharp from './src/screens/CSharp/CSharp';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false, // Hide the default header since we have our own
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Lessons" component={Lessons} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="CSharp" component={CSharp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
