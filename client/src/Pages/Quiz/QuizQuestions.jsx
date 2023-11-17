import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './Quiz.css';
import axios from 'axios'


const QuizQuestions = () => {

      const [loading, setLoading] = useState(true);
      const {id}= useParams();
      const [quizes, setQuizes] = useState(undefined);
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
        
        
        
        const navigate= useNavigate();
        var path=useLocation();
        var [flag, setFlag] = useState("end");
        const [submited, setsubmited] = useState(false);
          
      console.log(currentquiz);
      function startQuiz(e){
        setFlag("start");
      }

      function submitQuiz(e){
        setFlag(false);
        console.log(flag);
        setsubmited(true);
        e.preventDefault();
      }
      window.onfocus = function (ev) {
          console.log("flag "+flag);
      };

      const User = useSelector((state) =>( state.currentUserReducer ))
      console.log(User);
      

  return (
    <div>
      {
        loading?
          <div>Loading</div>
        :
          <div className='quiz-main-container'>
        {
          submited && <div className='main-bar-header'>
            <h2>You scored : </h2>
          </div>
        }
        
        {
        flag==="end"? 
        <div className='main-bar'>
            <div className="main-bar-header">
                <h1>{currentquiz.quizName}</h1>
                <h2>{currentquiz.type} Quiz</h2>
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
        :
        <div className="main-bar">
          {
            window.onblur = async function (ev) {
              // console.log(path.pathname);
              // console.log("/Quiz/"+id);
              if(flag==="start"){
                console.log("lost focus");
                
                setFlag("end");
                submitQuiz(ev);
                console.log(flag);
                alert("Your quiz has been auto submitted");
                // navigate('/Quiz');
              }
            }
          }
          
            <div className="main-bar-header">
                <h1>{currentquiz.qname}</h1>
                <h2>{currentquiz.type} Quiz</h2>
            </div>
            <div className="quiz-questions-container">
              <form action="" onSubmit={submitQuiz}>
              <ol type='1'>
              {
                currentquiz.questions.map((question)=>(
                <div className="quiz-question" key={question?._id}>
                  <li>
                    <p>{question.ques}</p>
                    <ol type = "a">
                    {
                          question.options.map((opt)=>(
                            <li key={opt}>
                                <input type='radio' name={question.ques_id} id= {question.ques_id + opt}/>
                                <label htmlFor={question.ques_id + opt}>{opt}</label>
                            </li>
                          )) 
                    }
                    </ol>  
                  </li>
                    
                    {currentquiz.type==="Practice" && <details>
                        <summary>Show Answer</summary>
                        <div>
                          <p>Correct option: {question.ans}</p> <p>{question.ans_desc}</p>
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