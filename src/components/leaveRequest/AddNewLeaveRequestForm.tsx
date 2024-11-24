import {Image, TouchableOpacity, View} from 'react-native';
import React, {ReactNode, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {addLeaveRequestSchema, IAddLeaveRequestSchema} from '@/const/schema';
import Button from '../button/Button';
import GradientButton from '../button/GradientButton';
import {spacing} from '@/theme/spacing';
import {applyOpacity} from '@/utils/applyOpacity';
import Text from '../text/Text';
import {colors} from '@/theme/colors';
import DatePickerInput from './DatePickerInput';
import FormField from '../form/FormField';
import {Picker} from '@react-native-picker/picker';
import {ENUM_LEAVE_TYPE} from '@/enums';

type Props = {
  trigger: ({ref}: {ref: any}) => ReactNode;
};
const AddNewLeaveRequestForm = ({trigger}: Props) => {
  const refRBSheet = useRef<null | any>();
  const form = useForm<IAddLeaveRequestSchema>({
    resolver: zodResolver(addLeaveRequestSchema),
    mode: 'all',
  });

  async function onSubmit(values: IAddLeaveRequestSchema) {
    console.log(values);
  }

  const errors = form.formState.errors;

  return (
    <View style={styles.container}>
      {trigger({ref: refRBSheet})}
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        height={500}
        draggable
        customStyles={{
          wrapper: {
            backgroundColor: applyOpacity('#000', 0.8),
          },
          container: {
            paddingHorizontal: spacing[5],
            paddingVertical: spacing[6],
            borderWidth: 1,
          },
          draggableIcon: {
            backgroundColor: colors.primary,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View>
          <Text preset="h2" style={styles.title}>
            New Leave
          </Text>
          <View style={styles.formContainer}>
            <DatePickerInput
              onDateChange={date =>
                form.setValue('startDate', date, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                })
              }
              trigger={({setShowPicker}) => (
                <View style={styles.borderBottom}>
                  <TouchableOpacity
                    touchSoundDisabled
                    style={styles.datePickerContainer}
                    onPress={() => setShowPicker(true)}>
                    <Image
                      style={styles.datePicker}
                      source={require('@/assets/images/date-picker.png')}
                    />
                    <View>
                      <Text preset="small" style={styles.dateLabel}>
                        From
                      </Text>
                      <Text preset="h5" style={styles.dateValue}>
                        {form.getValues('startDate')
                          ? new Date(
                              form.getValues('startDate'),
                            ).toLocaleDateString()
                          : 'Select from date'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {errors.startDate && (
                    <Text
                      preset="small"
                      style={[styles.error, {color: colors.error}]}>
                      {errors.startDate.message}
                    </Text>
                  )}
                </View>
              )}
            />

            <DatePickerInput
              onDateChange={date =>
                form.setValue('endDate', date, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                })
              }
              trigger={({setShowPicker}) => (
                <View style={styles.borderBottom}>
                  <TouchableOpacity
                    touchSoundDisabled
                    style={styles.datePickerContainer}
                    onPress={() => setShowPicker(true)}>
                    <Image
                      style={styles.datePicker}
                      source={require('@/assets/images/date-picker.png')}
                    />
                    <View>
                      <Text preset="small" style={styles.dateLabel}>
                        To
                      </Text>
                      <Text preset="h5" style={styles.dateValue}>
                        {form.getValues('endDate')
                          ? new Date(
                              form.getValues('startDate'),
                            ).toLocaleDateString()
                          : 'Select to date'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {errors.endDate && (
                    <Text
                      preset="small"
                      style={[styles.error, {color: colors.error}]}>
                      {errors.endDate?.message as string}
                    </Text>
                  )}
                </View>
              )}
            />

            <View
              style={[
                styles.borderBottom,
                {
                  paddingHorizontal: spacing[4],
                },
              ]}>
              <Picker
                selectedValue={form.getValues('leaveType')}
                onValueChange={itemValue =>
                  form.setValue('leaveType', itemValue, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  })
                }>
                <Picker.Item label="Select Leave Type" value="" />
                {Object.values(ENUM_LEAVE_TYPE).map(leaveType => (
                  <Picker.Item
                    key={leaveType}
                    label={
                      leaveType.charAt(0).toUpperCase() + leaveType.slice(1)
                    }
                    value={leaveType}
                  />
                ))}
              </Picker>
            </View>

            <FormField
              preset="primary"
              style={styles.formField}
              placeholderTextColor={colors['muted-foreground']}
              form={form}
              name="reason"
              placeHolder="Reason for apply"
              errorStyle={styles.error}
            />
          </View>
          <View style={styles.actionContainer}>
            <Button
              style={styles.buttonHeight}
              onPress={() => refRBSheet.current.close()}
              title="Cancel"
              variant="secondary"
            />
            <GradientButton
              gradientStyle={[styles.buttonHeight, styles.gradientButton]}
              onPress={form.handleSubmit(onSubmit)}
              title="Send for approval"
            />
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default AddNewLeaveRequestForm;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    color: colors['secondary-foreground'],
    letterSpacing: 20 * 0.08,
    fontWeight: 900,
  },
  formContainer: {
    marginVertical: spacing[6],
    borderWidth: 1,
    borderColor: applyOpacity(colors['gray-dark'], 0.4),
  },
  formField: {
    borderWidth: 0,
    textAlignVertical: 'top',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    height: 100,
    fontWeight: 600,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing[2],
  },
  buttonHeight: {
    height: spacing[9],
  },
  gradientButton: {
    padding: 0,
    width: 170,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: applyOpacity(colors['gray-dark'], 0.4),
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[5],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  },
  datePicker: {
    width: 34,
    height: 34,
  },
  dateLabel: {
    color: colors['gray-dark'],
    fontWeight: 500,
  },
  dateValue: {
    color: colors['medium-navy-blue'],
    fontWeight: 700,
    letterSpacing: 14 * 0.08,
  },
  error: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[2],
  },
});
