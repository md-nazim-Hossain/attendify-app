import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CheckInScreen from '@/screens/protected/employee/CheckInScreen';
import CheckoutScreen from '@/screens/protected/employee/CheckoutScreen';
import TakeBreakScreen from '@/screens/protected/employee/TakeBreakScreen';
import MyRequestScreen from '@/screens/protected/employee/MyRequestScreen';
import ProfileScreen from '@/screens/protected/employee/ProfileScreen';

const Stack = createStackNavigator();
const EmployeeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CheckIn" component={CheckInScreen} />
      <Stack.Screen name="CheckOut" component={CheckoutScreen} />
      <Stack.Screen name="MyRequest" component={MyRequestScreen} />
      <Stack.Screen name="TakeBreak" component={TakeBreakScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default EmployeeStack;
