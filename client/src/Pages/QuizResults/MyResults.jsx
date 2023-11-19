import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { useSelector } from 'react-redux';

const quiz = [];

const MyResults = () => {
    const User = useSelector((state) => (state.currentUserReducer))
    const quizes = useSelector((state) => state.quizReducer?.data?.allQuiz);
    return (
        <div className='home-container-1'>
            <LeftSidebar></LeftSidebar>
            <div className='home-container-2'>

                <div className='main-bar'>
                    <div className="main-bar-header">
                        <h1>Your Results</h1>
                        <h2>{User?.result.name}</h2>
                    </div>
                </div>

                <div className="quizes-container">
                    {
                        quizes?.map((quiz, index) => (
                            <div className='quiz-name-container'>
                                <div className='quiz-name'>
                                    <div>
                                        <p>{index+1}. {quiz?.quizName}</p>
                                        <p>Average Score: {quiz?.averageScore}</p>
                                    </div>
                                    <div>
                                        <p>{quiz.type} Quiz </p>
                                        <p>Created by {quiz?.authorName?.name}</p>
                                    </div>
                                </div>
                                <p>Score: {quiz.score} / {quiz.total}</p>

                            </div>
                        ))

                    }

                </div>
            </div>
        </div>
    )
}

export default MyResults