import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailMovieScreen from '../screens/movies/DetailMovieScreen';
import ListMoviesScreen from '../screens/movies/ListMoviesScreen';
import Profiles from '../screens/profiles/Profiles';
import EditProfile from '../screens/profiles/EditProfile';
import ChangePass from '../screens/profiles/ChangePass';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage" component={DetailMovieScreen} />
      <Stack.Screen name="ListMoviesScreent" component={ListMoviesScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profiles} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

const ABStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage2"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage2" component={DetailMovieScreen} />
      <Stack.Screen name="ListMoviesScreent2" component={ListMoviesScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const CinemaNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#52CC6D',
        tabBarInactiveTintColor: '#828282',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '400',
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 3,
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#52CC6D' : '#828282',
                }}
                source={require('../images/address.png')}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#52CC6D' : '#828282',
                }}
                source={require('../images/address.png')}
              />
            );
          } else if (route.name === 'Cart') {
            return (
              <Image
                style={{
                  width: 27.31,
                  height: 24,
                  tintColor: focused ? '#52CC6D' : '#828282',
                }}
                source={require('../images/address.png')}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={ProfileStack} />
      <Tab.Screen name="Cart" component={ABStack} />
    </Tab.Navigator>
  );
};

export default CinemaNavigation;
