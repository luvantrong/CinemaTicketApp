import React from "react";
import AppNavigation from "./app/navigation/AppNavigation";
import { AccountConTextProvider } from "./app/context/AccountContext";
import HomeScreen from "./app/screens/movies/HomeScreen";
import ItemService from "./app/screens/movies/Item/ItemService";
import DetailMovieScreen from "./app/screens/movies/DetailMovieScreen";
import EventScreen from "./app/screens/Event/EventScreen";

const App = () => {
  return (
    // <AccountConTextProvider>
    //   <AppNavigation />
    // </AccountConTextProvider>
    // <HomeScreen/>
    // <ItemService/>
    <EventScreen/>
  );
};

export default App;
