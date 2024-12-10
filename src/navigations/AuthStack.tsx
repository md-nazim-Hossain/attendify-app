import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@/screens/auth/LoginScreen';
import ForgottenPassword from '@/screens/auth/ForgottenPassword';
import {useAuth} from './AuthProvider';
import MyCompaniesScreen from '@/screens/protected/MyCompaniesScreen';
import {AuthStackParamList} from '@/types';

const Stack = createStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  const {isJoinCompany} = useAuth();
  return (
    <Stack.Navigator
      initialRouteName={!isJoinCompany ? 'MyCompanies' : 'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
      {!isJoinCompany && (
        <Stack.Screen name="MyCompanies" component={MyCompaniesScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
