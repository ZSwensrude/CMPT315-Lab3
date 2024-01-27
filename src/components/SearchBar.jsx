import React from "react";
import "./components.css";

const SearchBar = ({ placeholder, handleInput }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleInput}
  />
);

export default SearchBar;