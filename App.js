import React from "react";
import AppNavigation from "./app/navigation/AppNavigation";
import { AccountConTextProvider } from "./app/context/AccountContext";
import { CinemaConTextProvider } from "./app/context/CinemaContext";

import Payment from "./app/screens/movies/Payment";

const App = () => {
  return (
    <Payment />
  );
};

export default App;
