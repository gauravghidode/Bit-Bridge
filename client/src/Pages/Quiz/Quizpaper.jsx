import React from 'react'
import { Link } from 'react-router-dom';
import './Quiz.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast'

const Quizpaper = ({quiz, index}) => {
    // console.log(quiz);
    const navigate=useNavigate();
    const location = useLocation();
    const User = useSelector((state) =>( state.currentUserReducer ))
    //   console.log(User);

      function redirect(){
        if(User===null){
            toast.error("Please login to take quiz");
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
                <p>{index}</p> 
                <p>{quiz?.quizName}</p>
            </div>
            <div>
                <p>{quiz.type} Quiz </p>
                <p>Created by {quiz?.authorName?.name}</p>
            </div> 
        </div> 
        {
            <button className='inner-grad-btn' onClick={redirect}>Take Quiz</button> 
        }  
        
    </div>
  )
}

export default Quizpaper;