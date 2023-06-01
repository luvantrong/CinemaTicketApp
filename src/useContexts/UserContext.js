import {View, Text} from 'react-native';
import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserConTextProvider = props => {
  const {children} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}>
      {children}
    </UserContext.Provider>
  );
};
