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
import { ProgressProvider } from './src/context/ProgressContext';
import "./global.css"

// Import screens
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Lessons from './src/screens/Lessons';
import Profile from './src/screens/Profile';

// Language home pages
import CSharp from './src/screens/CSharp/CSharp';
import Javascript from './src/screens/Javascript/Javascript';
import Python from './src/screens/Python/Python';
import Java from './src/screens/Java/Java';

// JavaScript lessons
import JSLesson1 from './src/screens/Javascript/lessons/Lesson1';
import JSLesson2 from './src/screens/Javascript/lessons/Lesson2';
import JSLesson3 from './src/screens/Javascript/lessons/Lesson3';
import JSLesson4 from './src/screens/Javascript/lessons/Lesson4';
import JSLesson5 from './src/screens/Javascript/lessons/Lesson5';
import JSLesson6 from './src/screens/Javascript/lessons/Lesson6';
import JSLesson7 from './src/screens/Javascript/lessons/Lesson7';
import JSLesson8 from './src/screens/Javascript/lessons/Lesson8';
import JSLesson9 from './src/screens/Javascript/lessons/Lesson9';
import JSLesson10 from './src/screens/Javascript/lessons/Lesson10';

// Python lessons
import PythonLesson1 from './src/screens/Python/lessons/Lesson1';
import PythonLesson2 from './src/screens/Python/lessons/Lesson2';
import PythonLesson3 from './src/screens/Python/lessons/Lesson3';
import PythonLesson4 from './src/screens/Python/lessons/Lesson4';
import PythonLesson5 from './src/screens/Python/lessons/Lesson5';
import PythonLesson6 from './src/screens/Python/lessons/Lesson6';
import PythonLesson7 from './src/screens/Python/lessons/Lesson7';
import PythonLesson8 from './src/screens/Python/lessons/Lesson8';
import PythonLesson9 from './src/screens/Python/lessons/Lesson9';
import PythonLesson10 from './src/screens/Python/lessons/Lesson10';

// Java lessons
import JavaLesson1 from './src/screens/Java/lessons/Lesson1';
import JavaLesson2 from './src/screens/Java/lessons/Lesson2';
import JavaLesson3 from './src/screens/Java/lessons/Lesson3';
import JavaLesson4 from './src/screens/Java/lessons/Lesson4';
import JavaLesson5 from './src/screens/Java/lessons/Lesson5';
import JavaLesson6 from './src/screens/Java/lessons/Lesson6';
import JavaLesson7 from './src/screens/Java/lessons/Lesson7';
import JavaLesson8 from './src/screens/Java/lessons/Lesson8';
import JavaLesson9 from './src/screens/Java/lessons/Lesson9';
import JavaLesson10 from './src/screens/Java/lessons/Lesson10';

// C# lessons
import CSharpLesson1 from './src/screens/CSharp/lessons/Lesson1';
import CSharpLesson2 from './src/screens/CSharp/lessons/Lesson2';
import CSharpLesson3 from './src/screens/CSharp/lessons/Lesson3';
import CSharpLesson4 from './src/screens/CSharp/lessons/Lesson4';
import CSharpLesson5 from './src/screens/CSharp/lessons/Lesson5';
import CSharpLesson6 from './src/screens/CSharp/lessons/Lesson6';
import CSharpLesson7 from './src/screens/CSharp/lessons/Lesson7';
import CSharpLesson8 from './src/screens/CSharp/lessons/Lesson8';
import CSharpLesson9 from './src/screens/CSharp/lessons/Lesson9';
import CSharpLesson10 from './src/screens/CSharp/lessons/Lesson10';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ProgressProvider>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
            headerShown: false, // Hide the default header
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Lessons" component={Lessons} />
          <Stack.Screen name="Profile" component={Profile} />
          
          {/* Language Home Pages */}
          <Stack.Screen name="CSharp" component={CSharp} />
          <Stack.Screen name="Javascript" component={Javascript} />
          <Stack.Screen name="Python" component={Python} />
          <Stack.Screen name="Java" component={Java} />
          
          {/* JavaScript Lessons */}
          <Stack.Screen name="JSLesson1" component={JSLesson1} />
          <Stack.Screen name="JSLesson2" component={JSLesson2} />
          <Stack.Screen name="JSLesson3" component={JSLesson3} />
          <Stack.Screen name="JSLesson4" component={JSLesson4} />
          <Stack.Screen name="JSLesson5" component={JSLesson5} />
          <Stack.Screen name="JSLesson6" component={JSLesson6} />
          <Stack.Screen name="JSLesson7" component={JSLesson7} />
          <Stack.Screen name="JSLesson8" component={JSLesson8} />
          <Stack.Screen name="JSLesson9" component={JSLesson9} />
          <Stack.Screen name="JSLesson10" component={JSLesson10} />
          
          {/* Python Lessons */}
          <Stack.Screen name="PythonLesson1" component={PythonLesson1} />
          <Stack.Screen name="PythonLesson2" component={PythonLesson2} />
          <Stack.Screen name="PythonLesson3" component={PythonLesson3} />
          <Stack.Screen name="PythonLesson4" component={PythonLesson4} />
          <Stack.Screen name="PythonLesson5" component={PythonLesson5} />
          <Stack.Screen name="PythonLesson6" component={PythonLesson6} />
          <Stack.Screen name="PythonLesson7" component={PythonLesson7} />
          <Stack.Screen name="PythonLesson8" component={PythonLesson8} />
          <Stack.Screen name="PythonLesson9" component={PythonLesson9} />
          <Stack.Screen name="PythonLesson10" component={PythonLesson10} />
          
          {/* Java Lessons */}
          <Stack.Screen name="JavaLesson1" component={JavaLesson1} />
          <Stack.Screen name="JavaLesson2" component={JavaLesson2} />
          <Stack.Screen name="JavaLesson3" component={JavaLesson3} />
          <Stack.Screen name="JavaLesson4" component={JavaLesson4} />
          <Stack.Screen name="JavaLesson5" component={JavaLesson5} />
          <Stack.Screen name="JavaLesson6" component={JavaLesson6} />
          <Stack.Screen name="JavaLesson7" component={JavaLesson7} />
          <Stack.Screen name="JavaLesson8" component={JavaLesson8} />
          <Stack.Screen name="JavaLesson9" component={JavaLesson9} />
          <Stack.Screen name="JavaLesson10" component={JavaLesson10} />
          
          {/* C# Lessons */}
          <Stack.Screen name="CSharpLesson1" component={CSharpLesson1} />
          <Stack.Screen name="CSharpLesson2" component={CSharpLesson2} />
          <Stack.Screen name="CSharpLesson3" component={CSharpLesson3} />
          <Stack.Screen name="CSharpLesson4" component={CSharpLesson4} />
          <Stack.Screen name="CSharpLesson5" component={CSharpLesson5} />
          <Stack.Screen name="CSharpLesson6" component={CSharpLesson6} />
          <Stack.Screen name="CSharpLesson7" component={CSharpLesson7} />
          <Stack.Screen name="CSharpLesson8" component={CSharpLesson8} />
          <Stack.Screen name="CSharpLesson9" component={CSharpLesson9} />
          <Stack.Screen name="CSharpLesson10" component={CSharpLesson10} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </ProgressProvider>
  );
}

export default App;
