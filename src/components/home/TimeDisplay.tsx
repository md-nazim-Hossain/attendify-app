import {StyleSheet, TextStyle, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ITimeClockProps} from '@/types';
import Text from '../text/Text';
import {format12HourTime} from '@/utils/timeFormatter';

type Props = {
  preset?: string;
  style?: TextStyle;
};
const TimeDisplay = ({preset = 'h1', style}: Props) => {
  const [currentTime, setCurrentTime] = useState<ITimeClockProps>(
    format12HourTime(new Date()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(format12HourTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.timerContainer}>
      <Text
        preset={preset as any}
        style={[styles.timerContent, styles.timerWidth, style]}>
        {currentTime.hours}
      </Text>
      <Text preset={preset as any} style={[styles.timerContent, {width: 10}]}>
        :
      </Text>
      <Text
        preset={preset as any}
        style={[styles.timerContent, styles.timerWidth, style]}>
        {currentTime.minutes}
      </Text>
      <Text preset={preset as any} style={[styles.timerContent, {width: 10}]}>
        :
      </Text>
      <Text
        preset={preset as any}
        style={[styles.timerContent, styles.timerWidth, style]}>
        {currentTime.seconds}
      </Text>
    </View>
  );
};

export default TimeDisplay;

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timerContent: {
    letterSpacing: 1.5,
    textAlign: 'center',
    color: '#4BB9CF',
  },

  timerWidth: {
    width: 55,
  },
});
