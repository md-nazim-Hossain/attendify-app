import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import EmployeeStack from './EmployeeStack';
import {useAuth} from './AuthProvider';
import MyCompaniesScreen from '@/screens/protected/MyCompaniesScreen';

const Routes = () => {
  const {isAuthenticated, isJoinCompany} = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        isJoinCompany ? (
          <EmployeeStack />
        ) : (
          <MyCompaniesScreen />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
