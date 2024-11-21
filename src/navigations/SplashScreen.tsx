import {colors} from '@/theme/colors';
import React, {useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({onFinish}: {onFinish: () => void}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <LinearGradient
      colors={[colors['dark-navy-blue'], colors['medium-navy-blue']]}
      style={styles.container}
      locations={[0, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.box}>
        <Text style={styles.text}>Attendify</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  box: {
    width: '100%',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'KronaOne-Regular, sans-serif',
    color: '#fff',
    textAlign: 'center',
  },
});

export default SplashScreen;
