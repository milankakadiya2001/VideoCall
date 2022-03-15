import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CallingAction from './src/components/CallingAction/CallingAction';
import CallingScreen from './src/screen/CallingScreen';
import ContactScreen from './src/screen/ContactScreen';
import IncomingScreen from './src/screen/IncomingScreen';
import LoginScreen from './src/screen/LoginScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  console.log('hello');
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Group screenOptions={{headerShown: true}}>
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Group>

        <Stack.Screen name="Incoming" component={IncomingScreen} />
        <Stack.Screen name="CallingAction" component={CallingAction} />
        <Stack.Screen name="CallingScreen" component={CallingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
