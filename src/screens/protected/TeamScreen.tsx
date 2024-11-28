import {View} from 'react-native';
import React from 'react';
import {colors} from '@/theme/colors';
import {StyleSheet} from 'react-native';
import Text from '@/components/text/Text';
import {spacing} from '@/theme/spacing';
import TeamDetails from '@/components/team/TeamDetails';
import CarouselSlider from '@/components/team/CarouselSlider';

const TeamScreen = () => {
  return (
    <View style={styles.container}>
      <Text preset="h2" style={styles.title}>
        Team
      </Text>
      <CarouselSlider />
      <TeamDetails />
    </View>
  );
};

export default TeamScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spacing[10],
  },
  title: {
    color: colors['secondary-foreground'],
    letterSpacing: 20 * 0.08,
    fontWeight: 900,
    textAlign: 'center',
    marginBottom: spacing[8],
  },
});
