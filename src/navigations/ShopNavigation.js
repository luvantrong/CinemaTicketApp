import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Shop from '../screens/shop/Shop';
import Categories from '../screens/explore/Categories';
import FruitsMenu from '../screens/explore/FruitsMenu';
import Cart from '../screens/cart/Cart';
import DetailCart from '../screens/cart/DetailCart';
import Favorite from '../screens/favorite/Favorite';
import Account from '../screens/account/Account';
import Oders from '../screens/account/Oders';
import EditProfile from '../screens/account/EditProfile';
import Profile from '../screens/account/Profile';
import ChangePassword from '../screens/account/ChangePassword';
import MyCards from '../screens/account/MyCards';
import NewCard from '../screens/account/NewCard';
import Address from '../screens/account/Address';
import Payment from '../screens/account/Payment';
import NewAddress from '../screens/account/NewAddress';
import EditAdress from '../screens/account/EditAddress';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Shops"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="FruitsMenus" component={FruitsMenu} />
      <Stack.Screen name="Shops" component={Shop} />
    </Stack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="FruitsMenus" component={FruitsMenu} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carts"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Carts" component={Cart} />
      <Stack.Screen name="DetailCart" component={DetailCart} />
    </Stack.Navigator>
  );
};

const AcountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Accounts"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Accounts" component={Account} />
      <Stack.Screen name="Orderss" component={Oders} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="MyCards" component={MyCards} />
      <Stack.Screen name="NewCard" component={NewCard} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="NewAdress" component={NewAddress} />
      <Stack.Screen name="EditAddres" component={EditAdress} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const ShopNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FF5E00',
        tabBarInactiveTintColor: '#6D3805',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '400',
        },
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 83,
          paddingHorizontal: 25,
          paddingBottom: 20,
          paddingTop: 13,
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Shop') {
            return (
              <Image
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? '#FF5E00' : '#6D3805',
                }}
                source={require('../images/logoHome.png')}
              />
            );
          } else if (route.name === 'Explore') {
            return (
              <Image
                style={{
                  width: 17,
                  height: 17,
                  tintColor: focused ? '#FF5E00' : '#6D3805',
                }}
                source={require('../images/logoExplore.png')}
              />
            );
          } else if (route.name === 'Cart') {
            return (
              <Image
                style={{
                  width: 22,
                  height: 19,
                  tintColor: focused ? '#FF5E00' : '#6D3805',
                }}
                source={require('../images/logoCart.png')}
              />
            );
          } else if (route.name === 'Favorite') {
            return (
              <Image
                style={{
                  width: 18,
                  height: 16,
                  tintColor: focused ? '#FF5E00' : '#6D3805',
                }}
                source={require('../images/logoFavorite.png')}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <Image
                style={{
                  width: 16,
                  height: 19,
                  tintColor: focused ? '#FF5E00' : '#6D3805',
                }}
                source={require('../images/logoAcount.png')}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Account" component={AcountStack} />
    </Tab.Navigator>
  );
};

export default ShopNavigation;
