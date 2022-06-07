import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchQuery } from "../Redux/Actions";

const SearchCharacter = ({ search }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  /**
   * This is going to search for the your input.
   * @param {*} t
   */
  useEffect(() => {
    dispatch(searchQuery(searchText));
  }, [searchText]);

  const searchIt = (t) => {
    setSearchText(t);
    //alert("Search query didn't match any character");
    // search(t);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Find a favorite character"
          autoFocus
          onChange={(e) => searchIt(e.target.value)}
          value={searchText}
        />
      </form>
    </section>
  );
};

export default SearchCharacter;
