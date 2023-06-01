import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AccountNavigation from './AccountNavigation';

import CinemaNavigation from './CinemaNavigation';

import {AccountContext} from '../context/AccountContext';

const AppNavigation = () => {
  const {isLoggedIn} = useContext(AccountContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <CinemaNavigation /> : <AccountNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
