import React, {Fragment, ReactNode, useState} from 'react';
import {TouchableOpacity, StyleSheet, Modal, Platform} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Text from '../text/Text';

type Props = {
  trigger: ({
    setShowPicker,
  }: {
    setShowPicker: (showPicker: boolean) => void;
  }) => ReactNode;
  onDateChange: (date: string) => void;
};
const DatePickerInput = ({trigger, onDateChange}: Props) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleConfirm = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(new Date(selectedDate).toISOString());
    }
  };

  return (
    <Fragment>
      {trigger({setShowPicker})}
      {showPicker && (
        <Modal transparent={true} animationType="slide" visible={showPicker}>
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleConfirm}
          />
          <TouchableOpacity
            onPress={() => setShowPicker(false)}
            style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </Modal>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    opacity: 0,
  },
});

export default DatePickerInput;
