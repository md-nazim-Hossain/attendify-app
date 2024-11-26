import {View, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {spacing} from '@/theme/spacing';
import Text from '@/components/text/Text';
import {typography} from '@/theme/typography';
import {colors} from '@/theme/colors';
import CustomBreakForm from '@/components/takeBreak/CustomBreakForm';
import PredifientBreak from '@/components/takeBreak/PredifientBreak';

const TakeBreakScreen = () => {
  const [other, setOther] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={
          !other
            ? require('@/assets/images/break-1.png')
            : require('@/assets/images/break-2.png')
        }
      />
      <View style={styles.contentContainer}>
        <Text preset="h2" style={styles.title}>
          Let’s take a break
        </Text>
        {other ? (
          <CustomBreakForm onBack={() => setOther(false)} />
        ) : (
          <PredifientBreak onPressOtherButton={() => setOther(true)} />
        )}
      </View>
    </View>
  );
};

export default TakeBreakScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: spacing[7] - 2,
    paddingVertical: spacing[11],
  },
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  title: {
    fontFamily: typography.jua,
    color: colors['secondary-foreground'],
    letterSpacing: 1.5,
    textAlign: 'center',
    marginBottom: spacing[4] + 2,
    fontWeight: 500,
  },
});
