import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '@/components/text/Text';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import {useForm} from 'react-hook-form';
import {
  addDailyBreakRequestSchema,
  IAddDailyBreakRequestSchema,
} from '@/const/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import FormField from '../form/FormField';
import Button from '../button/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  onBack: () => void;
};
const CustomBreakForm = ({onBack}: Props) => {
  const {width} = Dimensions.get('window');
  const ITEM_SIZE = (width - 64) / 2;
  const breakItem = [
    {
      title: 'Quick Break',
      time: 'for 15 min',
    },
    {
      title: '1/2 hour',
    },
    {
      title: '1 hour',
    },
    {
      title: 'Half Day',
    },
  ];

  const form = useForm<IAddDailyBreakRequestSchema>({
    resolver: zodResolver(addDailyBreakRequestSchema),
    mode: 'all',
  });

  async function onSubmit(values: IAddDailyBreakRequestSchema) {
    console.log(values);
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={breakItem}
        keyExtractor={(item, index) => index.toString()}
        style={{marginBottom: spacing[7]}}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.buttonStyle,
              {
                width: ITEM_SIZE,
                marginRight: index === 0 || index === 2 ? spacing[2] + 2 : 0,
                marginBottom: index === 0 || index === 1 ? spacing[2] + 2 : 0,
              },
            ]}>
            <Text preset="small" style={styles.buttonText}>
              {item.title}
            </Text>
            {item?.time && (
              <Text preset="xsmall" style={styles.smallText}>
                {item.time}
              </Text>
            )}
          </TouchableOpacity>
        )}
      />
      <View>
        <FormField
          containerStyle={{paddingLeft: spacing[3]}}
          variant="filled"
          form={form}
          name="endTime"
          placeholder="Example:0:00"
          keyboardType="numeric"
          Icon={
            <MaterialCommunityIcons
              size={24}
              color={colors['light-navy-blue']}
              name="clock-outline"
            />
          }
        />
        <FormField
          containerStyle={styles.formFieldTextArea}
          style={styles.formFieldTextArea}
          variant="filled"
          form={form}
          name="reason"
          placeholder="Reason"
          numberOfLines={5}
          textAlignVertical="top"
          multiline
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onBack} variant="transparent" title="Cancel" />
        <Button
          variant="transparent"
          title="Ok"
          onPress={form.handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default CustomBreakForm;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[12],
  },
  buttonStyle: {
    height: 42,
    borderRadius: 3,
    backgroundColor: colors['light-navy-blue'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 700,
    letterSpacing: 1.7,
    textAlign: 'center',
  },
  smallText: {
    fontWeight: 400,
  },
  formFieldTextArea: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: spacing[1],
  },
});
