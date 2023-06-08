import React, { useState, createContext } from "react";

export const CinemaContext = createContext();

export const CinemaConTextProvider = (props) => {
  const { children } = props;
  const [dataMovie, setDataMovie] = useState("");
  const [dataPopcorn, setDataPopcorn] = useState("");
  const [idPopcorn, setIdPopcorn] = useState("");
  const [soLuongPopcorn, setSoLuongPopcorn] = useState("");
  return (
    <CinemaContext.Provider
      value={{
        dataMovie,
        setDataMovie,
        dataPopcorn,
        setDataPopcorn,
        idPopcorn,
        setIdPopcorn,
        soLuongPopcorn,
        setSoLuongPopcorn,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};
