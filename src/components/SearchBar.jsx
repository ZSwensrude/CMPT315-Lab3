import React from "react";
import "./components.css";

// same as monsters demo
const SearchBar = ({ placeholder, handleInput }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleInput}
  />
);

export default SearchBar;