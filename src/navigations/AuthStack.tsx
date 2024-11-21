import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@/screens/auth/LoginScreen';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
