import SplashScreen from '@/navigations/SplashScreen';
import Providers from './src/navigations';
import React, {useState} from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <SplashScreen onFinish={() => setIsLoading(false)} />;
  }
  return <Providers />;
}
