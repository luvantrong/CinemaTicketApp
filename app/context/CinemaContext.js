import React, { useState, createContext } from "react";

export const CinemaContext = createContext();

export const CinemaConTextProvider = (props) => {
  const { children } = props;
  const [dataMovie, setDataMovie] = useState("");
  const [dataPopcorn, setDataPopcorn] = useState("");
  return (
    <CinemaContext.Provider
      value={{
        dataMovie,
        setDataMovie,
        dataPopcorn,
        setDataPopcorn,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};
