import React from 'react'
import { Link } from 'react-router-dom';
import './Quiz.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Quizpaper = ({quiz}) => {
    // console.log(quiz);
    const navigate=useNavigate();
    const User = useSelector((state) =>( state.currentUserReducer ))
    //   console.log(User);

      function redirect(){
        if(User===null){
            alert("Please login to take quiz");
            navigate('/Auth');
        }
        else{
            navigate(`/Quiz/${quiz._id}`);
        }
        
      }

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
        {/* <Link to={`/Quiz/${quiz._id}`}> */}
            <button className='inner-grad-btn' onClick={redirect}>Take Quiz</button>    
        {/* </Link> */}
    </div>
  )
}

export default Quizpaper;