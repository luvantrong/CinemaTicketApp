import React from "react";
import AppNavigation from "./app/navigation/AppNavigation";
import { AccountConTextProvider } from "./app/context/AccountContext";
import { CinemaConTextProvider } from "./app/context/CinemaContext";
import BookTicket from "./app/screens/movies/BookTicket";
import ItemPopcorn from "./app/screens/movies/Item/ItemPopcorn";
import SeatMap from "./app/screens/movies/SeatMap";
import ItemTicket from "./app/screens/movies/Item/ItemTicket";

const App = () => {
  return (
    <AccountConTextProvider>
      <CinemaConTextProvider>
        <AppNavigation />
      </CinemaConTextProvider>
    </AccountConTextProvider>
    // <ItemTicket />
  );
};

export default App;
