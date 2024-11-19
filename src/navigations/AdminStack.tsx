import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyApprovalsScreen from '@/screens/protected/admin/MyApprovalsScreen';

const Stack = createStackNavigator();
const AdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyApprovals" component={MyApprovalsScreen} />
    </Stack.Navigator>
  );
};

export default AdminStack;
