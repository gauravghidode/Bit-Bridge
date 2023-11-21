import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";


let filteredQuestionArray = []

const Searchbar = () => {
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  function handleSearch(e) {
    // console.log("searh text: " + searchText);
    // console.log(location.pathname);
    
  }
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  

  return (
    <span>
      <form action="">
        <input
          type="text"
          id="search-bar"
          placeholder="Search..."
          onChange={handleChange}
        />
        <span class="material-symbols-outlined search-icon" onClick={handleSearch}>
          <Link to={`/filter/${searchText}`}>
            <i class="fa fa-search" aria-hidden="true"></i>
          </Link>
          
        </span>
      </form>
    </span>
  );
};

export default Searchbar;
export {filteredQuestionArray};
