import React from 'react'
import { Link } from 'react-router-dom';

const Quizpaper = ({quiz}) => {
    console.log(quiz);
  return (
    <div className='quiz-name'>
        <Link to={`/Quiz/${quiz._id}`}>
            <p>{quiz._id}</p>
            <p>{quiz.qname}</p> 
        </Link>
            
    </div>
  )
}

export default Quizpaper;