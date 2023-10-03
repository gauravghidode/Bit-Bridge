import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import './HomeMainbar.css';
import QuestionList from './QuestionList';

const HomeMainbar = () => {

var questionList=[
    {
        id:1,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is a function?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Gaurav",
        askedOn: "Oct 1"
    },
    {
        id:2,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is React.js?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Alok",
        askedOn: "Oct 1"
    },
    {
        id:3,
        votes:3,
        noOfAnswers:2,
        questionTitle:"How to center a div?",
        questionBody:"What it meant to be",
        questionTags:["html", "css", "javascript"],
        userPosted:"Gaurav",
        askedOn: "Oct 1"
    },
    {
        id:4,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is React.js?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Alok",
        askedOn: "Oct 1"
    },
    {
        id:5,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is React.js?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Alok",
        askedOn: "Oct 1"
    },
    {
        id:6,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is React.js?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Alok",
        askedOn: "Oct 1"
    },
    {
        id:7,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is React.js?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Alok",
        askedOn: "Oct 1"
    },
    {
        id:8,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is React.js?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Alok",
        askedOn: "Oct 1"
    },
    {
        id:2,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is React.js?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Alok",
        askedOn: "Oct 1"
    },
    {
        id:2,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is React.js?",
        questionBody:"What it meant to be",
        questionTags:["java", "node.js", "react.js"],
        userPosted:"Alok",
        askedOn: "Oct 1"
    }
];

    const user=1;
    const navigate=useNavigate()
        
    const checkAuth=()=>{
        if(user==null){
            alert("Login or Signup to ask a question");
            navigate('/Auth');
        }
        else{
            navigate('/AskQuestion');
        }
    }

const location = useLocation();

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
                location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
            }
            <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>
            {
                questionList===null?
                <h1>Loading...</h1>:
                <>
                    <p>{questionList.length} questions </p>
                    <QuestionList questionList={questionList}></QuestionList>
                </>
            }
        </div>
    </div>
  )
}

export default HomeMainbar;