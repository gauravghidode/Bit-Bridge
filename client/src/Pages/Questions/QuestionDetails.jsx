import React from 'react'
import { useParams , Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import upvote from '../../assets/upvote.svg'
import downvote from '../../assets/downvote.svg'
import './Question.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAns from './DisplayAnswer'

const QuestionDetails = () => {

    const {id}=useParams();
    const questionList = useSelector(state => state.questionsReducer)
    // var questionList=[
    //     {
    //         _id:'1',
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
    // ]
    // console.log(id);

  return (
    <div className='question-details-page'>
        {
            questionList.data===null?
            <h1>Loading...</h1>:
            <>
                {
                    
                    questionList.data.filter(question => question._id==id).map(question => (
                        <div key={question._id}>
                            <section className='question-details-container'> 
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                    <div className="question-votes">
                                        <img src={upvote} alt="" className='material-icons-like'/>
                                        <p>{question.upvotes-question.downvotes}</p>
                                        <img src={downvote} className='material-icons-unlike'></img>
                                    </div>
                                    <div style={{width: '100%'}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className='question-details-tags'>
                                            {question.questionTags.map((tag)=> (
                                            <p key={tag}>{tag}</p>
                                            ))}
                                        </div>
                                        <div className="question-action-user">
                                            <div>
                                                <button type='button'>Share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                            <div>
                                                <p>asked on {question.askedOn}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link' style={{color: '#white'}}>
                                                    <Avatar backgroundColor="white" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers!=0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers</h3>
                                        <DisplayAns key={question._id}question={question}></DisplayAns>
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your answer</h3>
                                <form>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                    <input type="Submit" name="" id="" className='post-ans-btn' value='Post Your Answer'/>
                                </form>
                                <p>
                                    Checkout other questions tagged  
                                    {
                                        question.questionTags.map((tag) => (
                                            <Link style={{color: 'green'}}key={tag} className='ans-tags'> {tag}</Link>
                                        ))
                                    } or
                                    <Link to='/AskQuestion' style={{textDecoration: 'none', color: 'green'}}> ask your own question</Link>
                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
        }
    </div>
  )
}

export default QuestionDetails