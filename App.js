import React from "react";
import AppNavigation from "./app/navigation/AppNavigation";
import { AccountConTextProvider } from "./app/context/AccountContext";
import { CinemaConTextProvider } from "./app/context/CinemaContext";
import BookTicket from "./app/screens/movies/BookTicket";
import ItemPopcorn from "./app/screens/movies/Item/ItemPopcorn";

const App = () => {
  return (
  <BookTicket/>
  );
};

export default App;
