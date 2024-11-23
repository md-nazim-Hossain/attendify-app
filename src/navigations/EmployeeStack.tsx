/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from '@/screens/protected/HomeScreen';
import ProfileScreen from '@/screens/protected/ProfileScreen';
import MyRequestScreen from '@/screens/protected/MyRequestScreen';
import TeamScreen from '@/screens/protected/TeamScreen';
import TakeBreakScreen from '@/screens/protected/TakeBreakScreen';
import EmployeeTabBar from '@/components/bottomTabNavigation/EmployeeTabBar';

const Tab = createBottomTabNavigator();
function EmployeeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <EmployeeTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyRequest" component={MyRequestScreen} />
      <Tab.Screen name="Team" component={TeamScreen} />
      <Tab.Screen name="TakeBreak" component={TakeBreakScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default EmployeeStack;
