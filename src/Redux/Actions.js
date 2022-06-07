import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SEARCH_QUERY,
  MIN_PRICE,
  MAX_PRICE,
  IS_AVALIABLE
} from "./ActionTypes.js";

import axios from "axios";
const hash = "082426dd059a725c6a1157f530364311";
const publicKey = "cad0c4e65481ad87b78eb97516558e59";
const limit = 100;

//action creator
export const fetchRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};
export const fetchFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
export const searchQuery = (query) => {
  return {
    type: SEARCH_QUERY,
    payload: query,
  };
};

export const minPriceSet = (minPrice) =>{
  return {
    type: MIN_PRICE,
    payload: minPrice,
  };
}
export const maxPriceSet = (maxPrice) =>{
  return {
    type: MIN_PRICE,
    payload: maxPrice,
  };
}
export const isAvaliablilitySet = (istrue) =>{
  return {
    type: MIN_PRICE,
    payload: istrue,
  };
}


export const fetchData = (query) => {
  console.log("in fetch data");
  if (query == "") {
    return (dispatch) => {
      dispatch(fetchRequest);
      axios
        .get(
          `https://api.airtable.com/v0/appgBZbJ7UE8OHlNA/Furniture?api_key=keyUfWd996UB5Wf3J`
        )
        .then((response) => {
          console.log("FETCH DATA 3");
          console.log(response.data.records);
          const data = response.data.records;
          console.log(data);
          dispatch(fetchSuccess(data));
        })
        .catch((error) => {
          console.log(error.message);
          dispatch(fetchFailure(error.message));
        });
    };
  } else {
    console.log("got queryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    return (dispatch) => {
      dispatch(fetchRequest);
      axios
        .get(
          `https://api.airtable.com/v0/appgBZbJ7UE8OHlNA/Furniture?api_key=keyUfWd996UB5Wf3J`
        )
        .then((response) => {
          console.log("FETCH DATA 3");
          const data = response.data.data.results;
          console.log("thisssssssssssssssssssssssssssssssssssssssssssss");
          console.log(data);
          dispatch(fetchSuccess(data));
        })
        .catch((error) => {
          console.log(error.message);
          dispatch(fetchFailure(error.message));
        });
    };
  }
};
