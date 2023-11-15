import React from 'react'

const QuizResult = () => {
    const User = useSelector((state) =>( state.currentUserReducer ))
  return (
    <div className='quiz-main-container'>
        {
        <div className='main-bar'>
            <div className="main-bar-header">
                <h1>{currentquiz.qname}</h1>
                <h2>{currentquiz.type} Quiz</h2>
            </div>
            <p>Name: {User?.result.name}</p>
            <p>Email: {User?.result.email}</p>
            <h3>Result</h3>
           
            <p>You scored :</p>
        </div>
        } 
    </div>
  )
}

export default QuizResult