import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/Actions";
import "../CSS/App.css";
import Comic from "./Comic";

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  let comics= [];

  console.log("this is userrrrrrrr data")

  console.log(userData.data);
  let query = "" //userData.searchString;
  
  

  /**
   * Use Effect to run Async Action Creator
   */
  useEffect(() => {
    dispatch(fetchData(query));
  }, [query]);
  comics = userData.data;

  return userData.loading ? (
    <h1> Loading</h1>
  ) : (
    <section className="contents">
      {comics.map((item) => (
        <Comic key={item.id} item={item}></Comic>
      ))}
    </section>
  );
};

export default Home;
