import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import SignupOTP from '../screens/auth/SignupOTP';
import SignupPassword from '../screens/auth/SignupPassword';
import Welcome from '../screens/auth/Welcome';

const Stack = createNativeStackNavigator();

const UserNavigation = props => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignupOTP" component={SignupOTP} />
      <Stack.Screen name="SignupPassword" component={SignupPassword} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
