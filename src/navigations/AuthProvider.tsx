import React, {createContext, useEffect, useState} from 'react';
import CookieManager from '@react-native-cookies/cookies';
import {ActivityIndicator, View} from 'react-native';
import {useFetch} from '@/utils/reactQuery';
import {apiRoutes} from '@/utils/apiRoutes';
import {config} from '@/config';
import {IAPIResponse, IEmployee} from '@/types';
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
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [employee, setEmployee] = useState<IEmployee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAccessToken = async () => {
      try {
        const cookies = await CookieManager.get(config.API_BASE_URL);
        const token = cookies?.accessToken?.value;
        setAccessToken(token || null);
      } catch (error) {
        console.error('Error loading access token:', error);
        setLoading(false);
      }
    };

    loadAccessToken();
  }, []);

  const {isLoading, data} = useFetch<IAPIResponse<IEmployee>>(
    apiRoutes.auth.profile,
    {accessToken},
    {
      queryKey: [apiRoutes.auth.profile, {accessToken}],
      enabled: !!accessToken,
    },
  );

  useEffect(() => {
    if (data?.data) {
      setEmployee(data.data);
      setLoading(false);
    }
  }, [data]);

  const isAuthenticated = !!employee;
  const isAdmin = employee?.role === ENUM_EMPLOYEE_ROLE.ADMIN;

  if (loading || isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        employee,
        setEmployee,
        isAuthenticated,
        isAdmin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
