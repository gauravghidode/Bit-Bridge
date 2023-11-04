import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

const QuizQuestions = () => {

    const quizes=[
        {
          _id:"1",
          type: "Practice",
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
          type: "Practice",
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

      const [submited, setsubmited] = useState(false);
      const {id}= useParams();
      const currentquiz = quizes.filter((quiz)=>(
        (quiz._id)===(id)
      ))[0];
      
      // console.log(currentquiz);
      function submitQuiz(e){
        setsubmited(true);
        e.preventDefault();
      }

  return (
    <div className='home-container-1'>
    <LeftSidebar></LeftSidebar>
    <div className='home-container-2'>
        <div className="main-bar">
            <div className="main-bar-header">
                <h1>{currentquiz.qname}</h1>
                <h2>{currentquiz.type} Quiz</h2>
            </div>
            <div className="quiz-questions-container">
              <form action="" onSubmit={submitQuiz}>
              {
                currentquiz.questions.map((question)=>(
                <div className="quiz-question" key={question?._id}>
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
              <button type='submit'>Submit</button>
              </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default QuizQuestions