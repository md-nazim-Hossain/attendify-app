import React, {createContext, useEffect, useState} from 'react';
import CookieManager from '@react-native-cookies/cookies';
import {ActivityIndicator, View} from 'react-native';
import {useFetch} from '@/utils/reactQuery';
import {apiRoutes} from '@/utils/apiRoutes';
import {config} from '@/config';
import {IAPIResponse, IEmployeeWithUser} from '@/types';
import {ENUM_EMPLOYEE_ROLE} from '@/enums';

type IContext = {
  user: IEmployeeWithUser;
  setUser: React.Dispatch<React.SetStateAction<IEmployeeWithUser>>;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isJoinCompany: boolean;
};

export const AuthContext = createContext<IContext>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  isAdmin: false,
  isJoinCompany: false,
});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<IEmployeeWithUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAccessToken = async () => {
      try {
        const cookies = await CookieManager.get(config.API_BASE_URL);
        const token = cookies?.accessToken?.value;
        setAccessToken(token || null);
      } catch (error) {
        setLoading(false);
      }
    };

    loadAccessToken();
  }, []);

  const {isLoading, data, error} = useFetch<IAPIResponse<IEmployeeWithUser>>(
    apiRoutes.auth.profile,
    {accessToken},
    {
      queryKey: [apiRoutes.auth.profile, {accessToken}],
      enabled: !!accessToken,
    },
  );

  useEffect(() => {
    if (data?.data) {
      setUser(data.data);
      setLoading(false);
    }

    if (error) {
      setLoading(false);
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        CookieManager.set(config.API_BASE_URL, {
          name: 'accessToken',
          value: '',
          expires: new Date(0).toDateString(),
        });
        setAccessToken(null);
        setUser(null);
      }
    }
  }, [data, error]);

  const isAuthenticated = !!user;
  const isAdmin = user?.employee?.role === ENUM_EMPLOYEE_ROLE.ADMIN;

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
        user,
        setUser,
        isAuthenticated,
        isAdmin,
        isJoinCompany: !!user?.employee?.company,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
