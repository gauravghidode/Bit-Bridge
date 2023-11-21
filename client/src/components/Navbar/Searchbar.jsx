import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

let filteredQuestionArray = []

const Searchbar = () => {
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  function handleSearch(e) {
    console.log("searh text: " + searchText);
    console.log(location.pathname);
  }
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  const questions = useSelector((state) => state.questionsReducer);
  const questionList = questions?.data
  console.log(questionList);
  // const temp = []

  const unnecessaryWords = [
    "a",
    "the",
    "is",
    "how",
    "but",
    "what",
    "how",
    "where",
    "are",
    "to",
    "."
  ];

  const tempWords = searchText?.split(" ");
  const words = tempWords.map(str => str.toLowerCase())
  const necessaryWords = words?.filter(
    (word) => !unnecessaryWords?.includes(word)
  );

  const filteredQuestion = new Set();

  for(let q = 0; q < questionList?.length; q++){
    necessaryWords?.forEach(word => {
      const questionTitleNonLowerCase = questionList[q]?.questionTitle.split(" ")
      const lowerCasequestionTitle = questionTitleNonLowerCase?.map(splitWord => splitWord?.toLowerCase())
      const lowerCasequestionTitleString = lowerCasequestionTitle?.join(" ")
      if(lowerCasequestionTitleString?.includes(word)){
        filteredQuestion.add(questionList[q])
      }
    })
  }

  for(let q = 0; q < questionList?.length; q++){
    necessaryWords?.forEach(word => {
      const tagsArray = questionList[q]?.questionTags
      const tagStrings = tagsArray.map(tagObject => tagObject.tagName)
      const tagStringsLowerCase = tagStrings.map(tagString => tagString?.toLowerCase())
      tagStringsLowerCase.forEach(tag => {
        if(tag === word){
          filteredQuestion.add(questionList[q])
        }
      })
    })
  }

  filteredQuestionArray = Array.from(filteredQuestion)

  console.log(filteredQuestionArray)

  return (
    <span>
      <form action="">
        <input
          type="text"
          id="search-bar"
          placeholder="Search..."
          onChange={handleChange}
        />
        <span
          class="material-symbols-outlined search-icon"
          onClick={handleSearch}
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </form>
    </span>
  );
};

export default Searchbar;
