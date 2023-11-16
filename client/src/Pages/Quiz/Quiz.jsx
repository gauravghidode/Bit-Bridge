import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Quizpaper from './Quizpaper'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Quiz = () => {
  const User = useSelector((state) =>( state.currentUserReducer ))

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

  return (
    <div className='home-container-1'>
        <LeftSidebar></LeftSidebar>
        <div className='home-container-2'>
            <div className="main-bar">
                <div className="main-bar-header">
                    <h1>Quiz</h1>
                    {
                      (User?.result?.role==='admin'||User?.result?.role==='instructor')&&<Link to='/AddQuiz' className='add-btn'>Add Quiz</Link>
                    }
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