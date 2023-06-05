import React, { useState, createContext } from "react";

export const CinemaContext = createContext();

export const CinemaConTextProvider = (props) => {
  const { children } = props;
  const [dataMovie, setDataMovie] = useState(false);

  return (
    <CinemaContext.Provider
      value={{
        dataMovie,
        setDataMovie,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};
