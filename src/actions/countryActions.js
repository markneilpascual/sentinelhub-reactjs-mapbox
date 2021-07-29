import axios from "axios";

export const setCountry = (countryData) => {
  return {
    type: "SET_COUNTRY",
    payload: countryData,
  };
};
