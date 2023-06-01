import React, {useState, createContext} from 'react';

export const AccountContext = createContext();

export const AccountConTextProvider = props => {
  const {children} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataAccount, setDataAccount] = useState('');
  const [rememberEmailRegister, setRememberEmailRegister] = useState('');

  return (
    <AccountContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        dataAccount,
        setDataAccount,
        rememberEmailRegister,
        setRememberEmailRegister,
      }}>
      {children}
    </AccountContext.Provider>
  );
};
