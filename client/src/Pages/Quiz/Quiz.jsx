import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Quizpaper from './Quizpaper'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Quiz = () => {
  const User = useSelector((state) =>( state.currentUserReducer))

  const quizes = useSelector((state) => state.quizReducer.data.allQuiz);
  console.log(quizes);
  console.log(User);

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
                      quizes?.map((quiz, index)=>(
                          <Quizpaper quiz={quiz} index={index+1} key={quiz?._id}></Quizpaper>
                      ))
                  }
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quiz