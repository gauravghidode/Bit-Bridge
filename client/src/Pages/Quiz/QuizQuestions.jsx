import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './Quiz.css';
import { useDispatch } from 'react-redux'
import { submitQuiz } from '../../actions/quiz'

import axios from 'axios'


const QuizQuestions = () => {

      const dispatch = useDispatch();
      const [loading, setLoading] = useState(true);
      const {id}= useParams();
      const [currentquiz, setCurrentquiz] = useState(undefined);
      async function fetchQuiz(quizId){
        setLoading(true);
        console.log("Fetching quiz Data: ");
        const a = await axios.get(`http://localhost:4000/quiz/getQuiz/${quizId}`);
        console.log("Quiz fetched");
        setCurrentquiz(a?.data?.quiz);
        setLoading(false);
      }
      useEffect(() => {
        fetchQuiz(id);
      }, [])

      console.log(currentquiz);
      const length = currentquiz?.questions?.length;
      const ansArray = Array(length).fill(undefined);
      console.log(ansArray);
      
      const navigate= useNavigate();
      var path=useLocation();
      var [flag, setFlag] = useState(undefined);
      const [submited, setsubmited] = useState(false);

      const User = useSelector((state) =>( state.currentUserReducer ))
      const userid = User?.result._id; 
      const quizid = currentquiz?._id;


      function startQuiz(e){
        setFlag("start");
      }

      function handleSubmit(e){
        setFlag(false);
        console.log(flag);
        setsubmited(true);
        dispatch(submitQuiz({ansArray, userid, quizid}, navigate(0)));
        // e.preventDefault();
      }
      window.onfocus = function (ev) {
          console.log("flag "+flag);
      };

      
      function handleSelect(optionId, index){
        ansArray[index]=optionId;
        console.log(ansArray);
      }
      

  return (
    <div>
      {
        <div className='quiz-main-container'>
        {
          submited&&
          <div className='main-bar-header'>
            <h2>You scored : </h2>
            <button value="Click to exit" className="submit-btn" onClick={setFlag(undefined)}></button>
          </div>
          
        }
        
        {
        flag===undefined&& 
        <div className='main-bar'>
            <div className="main-bar-header">
                <h1>{currentquiz?.quizName}</h1>
                <h2>{currentquiz?.type} Quiz</h2>
            </div>
            <p>Once the quiz is started you cannot change tabs or click anywhere outside the window. In case you do so the quiz will be automatically submitted.</p>
            <form action="">
              <label htmlFor="">
                <p>Name: </p>
                <input type="text" name="" id="" value={User?.result?.name}/>
              </label>
              <label htmlFor="">
                <p>Email: </p>
                <input type="text" name="" id="" value={User?.result?.email} />
              </label>
              <p>
                <button onClick={startQuiz} className='quiz-submit-btn'>Click here to start</button>
              </p>
              
            </form>
        </div>
        }
        {
        flag==="start"&&
        <div className="main-bar">
          {
            window.onblur = async function (ev) {
              if(flag==="start"){
                console.log("lost focus");
                submitQuiz(ev);
                // console.log(flag);
                // alert("Your quiz has been auto submitted");
                // navigate('/Quiz');
              }
            }
          }
          
            <div className="main-bar-header">
                <h1>{currentquiz?.quizName}</h1>
                <h2>{currentquiz?.type} Quiz</h2>
            </div>
            <div className="quiz-questions-container">
              <form action="" onSubmit={handleSubmit}>
              <ol type='1'>
              {
                currentquiz?.questions?.map((question, index)=>(
                <div className="quiz-question">
                  <li>
                    <p>{question?.ques}</p>
                    <ol type = "a">
                    {
                          question?.options?.map((opt)=>(
                            <li key={opt._id}>
                                <input type='radio' name={question._id} id= {opt._id} onChange={()=>handleSelect(opt._id, index)}/>
                                <label htmlFor={opt._id}>{opt.option}</label>
                            </li>
                          )) 
                    }
                    </ol>  
                  </li>
                    
                    {currentquiz.type==="Practice" && <details>
                        <summary>Show Answer</summary>
                        <div>
                          <p>Correct option: {question?.ans?.answer?.option}</p> <p>{question?.ans?.answerDescription}</p>
                        </div>
                    </details>}
                </div>
                ))
              }
              </ol>
              <button type='submit' className='quiz-submit-btn'>Submit</button>
              </form>
            </div>
        </div>
        } 
        
      </div>
        }
      
    </div>
    // <div className=""></div>
      

  )
}

export default QuizQuestions