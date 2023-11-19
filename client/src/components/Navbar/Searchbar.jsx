import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
    const location=useLocation();
    const [searchText, setSearchText] = useState("");
    function handleSearch(e){
        console.log("searh text: "+searchText);
        console.log(location.pathname);
    }
    function handleChange(e){
        setSearchText(e.target.value);
    }
    console.log(searchText);
  return (
    <span>
      <form action="">
        <input type="text" id="search-bar" placeholder='Search...' onChange={handleChange}/>
        <span class="material-symbols-outlined search-icon" onClick={handleSearch}><i class="fa fa-search" aria-hidden="true"></i></span>
        </form>
    </span>
  );
};

export default Searchbar;
