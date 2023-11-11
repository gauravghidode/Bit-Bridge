import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useNavigate } from 'react-router-dom'


const QuizQuestions = () => {

    const quizes=[
        {
          _id:"1",
          type: "Practice",
          author: "Mr. Gaurav",
          qname: "dsa quiz1",
          questions: [
            {
              ques_id: "1",
              ques: "Which of the following is not a data structure?",
              options: ["Array", "List", "Quick Sort", "Tree"],
              ans:"c",
              ans_desc: "Quick Sort is a sorting algorithm and not a data structure"
            },
            {
              ques_id: "2",
              ques: "What among the following is not a tree traversal method?",
              options: ["Morris Traversal", "preorder", "postorder", "inorder", "none of the above"],
              ans: "e",
              ans_desc: "All the above are valid tree traversal techniques, therefore correct answer is none of the above"
            }
          ]
        },
        {
          _id:"2",
          type: "Assessment",
          author: "Mr. Gaurav",
          qname: "Dcn quiz1",
          questions: [
            {
              ques_id: "1",
              ques: "Which layer is responsible for routing?",
              options: ["Network Layer", "Transport Layer", "Data Link Layer", "Physical layer"],
              ans:"a",
              ans_desc: "Netword layer is responsible for routing"
            }
          ]
        }
      ]

      const navigate= useNavigate();
      var path=useLocation();
      var [flag, setFlag] = useState("end");
      const [submited, setsubmited] = useState(false);
      const {id}= useParams();
      const currentquiz = quizes.filter((quiz)=>(
        (quiz._id)===(id)
      ))[0];
      
      // console.log(currentquiz);
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
      
      
      

  return (
      <div className='quiz-main-container'>
        {
        flag==="end"? 
        <div>
            <h1>Once the quiz is started you cannot change tabs or click anywhere outside the window. In case you do so the quiz will be automatically submitted.</h1>
            <button onClick={startQuiz}>Click here to start</button>
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
                    {(submited) && <div><p>Correct option: {question.ans}</p> <p>{question.ans_desc}</p></div> }
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

  )
}

export default QuizQuestions