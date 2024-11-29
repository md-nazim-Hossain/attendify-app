import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './Routes';
import {AuthProvider} from './AuthProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}
