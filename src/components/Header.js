import React, { Fragment, useEffect, useState } from "react";
import mainLogo from "../material/marvel-edited.png";
import "../CSS/App.css";
import { useDispatch } from "react-redux";
import {searchQuery , minPriceSet,maxPriceSet} from "../Redux/Actions";

const styleObj = {
  paddingTop: "50px",
  borderRadius: "5px",
  margin: "50px",
  fountFamily: "Arial",
};

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000000");
  
  useEffect(() => {
    dispatch(searchQuery(searchText));
    dispatch(minPriceSet(minPrice));
    dispatch(maxPriceSet(maxPrice));
  }, [searchText, minPrice,maxPrice]);

  const searchIt = (t) => {
    setSearchText(t);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark header-margin">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Furniture Shop by Sadeed
          </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                   <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  
                </a>
              </li>
            </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Find Item"
              aria-label="Search"
              onChange={(e) => searchIt(e.target.value)}
              value={searchText}
            />
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Min  price"
                aria-label="Search"
                onChange={(e) => setMinPrice(e.target.value)}
                value={minPrice}
              />
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Max Price"
                aria-label="Search"
                onChange={(e) => setMaxPrice(e.target.value)}
                value={maxPrice}
              />
              <input type="radio" value="instock" id="parttime" />
	            <label>Avaliable in Stock</label>

	            
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
