import React from "react";
import AppNavigation from "./app/navigation/AppNavigation";
import { AccountConTextProvider } from "./app/context/AccountContext";

const App = () => {
  return (
    <AccountConTextProvider>
      <AppNavigation />
    </AccountConTextProvider>
  );
};

export default App;
