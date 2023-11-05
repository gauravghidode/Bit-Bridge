import React from 'react'
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quizpaper = ({quiz}) => {
    console.log(quiz);
  return (
    <div className='quiz-name-container'>
        <div className='quiz-name'>
            <div>
                <p>{quiz._id}</p>
                <p>{quiz.qname}</p> 
            </div>
            <div>
                <p>{quiz.type} Quiz </p>
                <p>Created by {quiz.author}</p>
            </div> 
        </div> 
        <Link to={`/Quiz/${quiz._id}`}>
            <button className='quiz-submit-btn'>Take Quiz</button>    
        </Link>
    </div>
  )
}

export default Quizpaper;