import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import EmployeeStack from './EmployeeStack';
import {useAuth} from './AuthProvider';

const Routes = () => {
  const {isAuthenticated} = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <EmployeeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
