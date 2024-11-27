import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from '@/screens/protected/HomeScreen';
import ProfileScreen from '@/screens/protected/ProfileScreen';
import MyRequestScreen from '@/screens/protected/MyRequestScreen';
import TeamScreen from '@/screens/protected/TeamScreen';
import TakeBreakScreen from '@/screens/protected/TakeBreakScreen';
import TabBar from '@/components/bottomTabNavigation/TabBar';
import {useAuth} from './AuthProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
function EmployeeStack() {
  const {isAdmin} = useAuth();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'shift',
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Request"
        component={MyRequestScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      {!isAdmin && (
        <Tab.Screen
          name="Team"
          component={TeamScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-group-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Take Break"
        component={TakeBreakScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="takeout-dining" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'account-circle' : 'account-circle-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default EmployeeStack;
