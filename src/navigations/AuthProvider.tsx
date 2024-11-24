import {IEmployee} from '@/types';
import React, {createContext, useEffect, useState} from 'react';
import CookieManager from '@react-native-cookies/cookies';
import {ENUM_EMPLOYEE_ROLE} from '@/enums';

type IContext = {
  employee: IEmployee | null;
  setEmployee: React.Dispatch<React.SetStateAction<IEmployee | null>>;
  isAuthenticated: boolean;
  isAdmin: boolean;
};
export const AuthContext = createContext<IContext>({
  employee: null,
  setEmployee: () => {},
  isAuthenticated: false,
  isAdmin: false,
});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const token = CookieManager.get('accessToken').then(token => {
    console.log('token-', token);
    return token;
  });
  const [employee, setEmployee] = useState<IContext['employee']>(null);
  const isAuthenticated = !!employee;
  const isAdmin = employee?.role === ENUM_EMPLOYEE_ROLE.ADMIN;

  useEffect(() => {}, [token]);
  return (
    <AuthContext.Provider
      value={{
        setEmployee,
        employee,
        isAuthenticated,
        isAdmin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
