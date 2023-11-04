import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Quizpaper from './Quizpaper'
import { Link } from 'react-router-dom'

const Quiz = () => {

  const quizes=[
    {
      _id:"1",
      type: "assessment",
      qname: "dsa quiz1",
      questions: [
        {
          ques: "Which of the following is not a data structure?",
          options: ["Array", "List", "Quick Sort", "Tree"],
          ans: 3
        },
        {
          ques: "What among the following is not a tree traversal method?",
          options: ["Morris Traversal", "preorder", "postorder", "inorder", "none of the above"],
          ans: 5
        }
      ]
    },
    {
      _id:"2",
      type: "assessment",
      qname: "Dcn quiz1",
      questions: [
        {
          ques: "Which layer is responsible for routing?",
          options: ["Network Layer", "Transport Layer", "Data Link Layer", "Physical layer"],
          ans:1
        }
      ]
    }
  ]

  return (
    <div className='home-container-1'>
        <LeftSidebar></LeftSidebar>
        <div className='home-container-2'>
            <div className="main-bar">
                <div className="main-bar-header">
                    <h1>Quiz</h1>
                    <Link to='/AddQuiz'>Add Quiz</Link>
                </div>
                <div className="quizes-container">
                  {
                      quizes.map((quiz)=>(
                          <Quizpaper quiz={quiz} key={quiz?._id}></Quizpaper>
                      ))
                  }
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quiz