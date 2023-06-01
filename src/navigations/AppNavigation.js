import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserNavigation from '../navigations/UserNavigation';
import ShopNavigation from '../navigations/ShopNavigation';

import {useSelector} from 'react-redux';

import {UserContext} from '../useContexts/UserContext';

const AppNavigation = () => {
  // const {isLoggedIn} = useContext(UserContext);
  const isLoggedInRedux = useSelector(state => state.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedInRedux ? <ShopNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
