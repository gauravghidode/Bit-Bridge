import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import Quizpaper from '../Quiz/Quizpaper';
import { useNavigate } from 'react-router-dom';

const QuizResult = () => {
    const User = useSelector((state) => (state.currentUserReducer))
    const quizes = useSelector((state) => state.quizReducer?.data?.allQuiz);
    console.log(quizes);

    const navigate= useNavigate();

    function redirectQuizResult(quizId){
        if(User===null){
            alert("Please login to view all results");
            navigate('/Auth');
        }
        else{
            navigate(`/QuizResult/${User?.result?._id}/${quizId}`);
        }
    }

    return (
        <div className='home-container-1'>
            <LeftSidebar></LeftSidebar>
            <div className='home-container-2'>

                {
                    <div className='main-bar'>
                        <div className="main-bar-header">
                            <h1>Quizes set by </h1>
                            <h2>{User?.result.name}</h2>
                        </div>

                    </div>
                }
                <div className="quizes-container">
                    {
                        quizes?.map((quiz, index) => (
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
                                <button className='inner-grad-btn' onClick={()=>{
                                    navigate(`/QuizResult/${User?.result?._id}/${quiz._id}`);
                                }}>View All participants</button>

                            </div>
                        ))

                    }

                </div>
            </div>
        </div>

    )
}

export default QuizResult