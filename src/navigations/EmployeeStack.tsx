import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from '@/screens/protected/HomeScreen';
import ProfileScreen from '@/screens/protected/ProfileScreen';
import MyRequestScreen from '@/screens/protected/MyRequestScreen';
import TeamScreen from '@/screens/protected/TeamScreen';
import TakeBreakScreen from '@/screens/protected/TakeBreakScreen';
import TabBar from '@/components/bottomTabNavigation/TabBar';
import {useAuth} from './AuthProvider';
import {Image, StyleSheet} from 'react-native';

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
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('@/assets/images/home-active.png')
                  : require('@/assets/images/home.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Request"
        component={MyRequestScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('@/assets/images/request-active.png')
                  : require('@/assets/images/request.png')
              }
            />
          ),
        }}
      />
      {isAdmin && (
        <Tab.Screen
          name="Team"
          component={TeamScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={[{width: 36, height: 22}]}
                resizeMode="cover"
                source={
                  focused
                    ? require('@/assets/images/team-active.png')
                    : require('@/assets/images/team.png')
                }
              />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Take Break"
        component={TakeBreakScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{width: 23, height: 22}}
              resizeMode="cover"
              source={
                focused
                  ? require('@/assets/images/break-active.png')
                  : require('@/assets/images/break.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[{width: 24, height: 24}]}
              resizeMode="cover"
              source={
                focused
                  ? require('@/assets/images/profile-active.png')
                  : require('@/assets/images/profile.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default EmployeeStack;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 22,
    resizeMode: 'cover',
  },
});
