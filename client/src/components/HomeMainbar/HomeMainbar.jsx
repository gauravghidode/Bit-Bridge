import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
import './HomeMainbar.css';
import QuestionList from './QuestionList';

const HomeMainbar = () => {

// var questionList=[
//     {
//         _id:1,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is a function?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Gaurav",
//         userId:101,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:2,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is React.js?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Alok",
//         userId:102,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:3,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"How to center a div?",
//         questionBody:"What it meant to be",
//         questionTags:["html", "css", "javascript"],
//         userPosted:"Gaurav",
//         userId:101,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:4,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is React.js?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Alok",
//         userId:102,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:5,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is React.js?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Alok",
//         userId:102,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:6,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is React.js?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Alok",
//         userId:2,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:7,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is React.js?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Alok",
//         userId:2,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:8,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is React.js?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Alok",
//         userId:2,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:2,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is React.js?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Alok",
//         userId:2,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     },
//     {
//         _id:2,
//         upvotes:3,
//         downvotes:2,
//         noOfAnswers:2,
//         questionTitle:"What is React.js?",
//         questionBody:"What it meant to be",
//         questionTags:["java", "node.js", "react.js"],
//         userPosted:"Alok",
//         userId:2,
//         askedOn: "Oct 1",
//         answer: [{
//             answerBody: "Answer",
//             userAnswered: 'Krishna',
//             answeredOn: 'Oct 4',
//             userId: 1
//         }]
//     }
// ];

    const user=1;
    const navigate=useNavigate()
    
    const questionList = useSelector( state => state.questionsReducer);
    console.log(questionList);


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
                questionList.data===null?
                <h1>Loading...</h1>:
                <>
                    <p>{questionList.data.length} questions </p>
                    <QuestionList questionList={questionList.data}></QuestionList>
                </>
            }
        </div>
    </div>
  )
}

export default HomeMainbar;