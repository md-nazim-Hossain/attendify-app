import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from '@/screens/protected/HomeScreen';
import ProfileScreen from '@/screens/protected/ProfileScreen';
import MyRequestScreen from '@/screens/protected/MyRequestScreen';
import TeamScreen from '@/screens/protected/TeamScreen';
import TakeBreakScreen from '@/screens/protected/TakeBreakScreen';
import TabBar from '@/components/bottomTabNavigation/TabBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@/theme/colors';
import {useAuth} from './AuthProvider';

const Tab = createBottomTabNavigator();
function EmployeeStack() {
  const {isAdmin} = useAuth();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        tabBarActiveTintColor: colors['light-navy-blue'],
        tabBarInactiveTintColor: colors.gray,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Request"
        component={MyRequestScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      {isAdmin && (
        <Tab.Screen
          name="Team"
          component={TeamScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Take Break"
        component={TakeBreakScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default EmployeeStack;
