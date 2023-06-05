import React from "react";
import AppNavigation from "./app/navigation/AppNavigation";
import { AccountConTextProvider } from "./app/context/AccountContext";
import HomeScreen from "./app/screens/movies/HomeScreen";
import ItemService from "./app/screens/movies/Item/ItemService";

const App = () => {
  return (
    <AccountConTextProvider>
      <AppNavigation />
    </AccountConTextProvider>
  );
};

export default App;
