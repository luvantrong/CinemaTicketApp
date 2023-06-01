import React from "react";
import AppNavigation from "../CinemaTicketApp/src/navigations/AppNavigation";
import { UserConTextProvider } from "./src/useContexts/UserContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "./redux/store.js";

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <UserConTextProvider> */}
        <AppNavigation />
        {/* </UserConTextProvider> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
