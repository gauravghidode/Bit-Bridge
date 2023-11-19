import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';



const MyResults = () => {
    const User = useSelector((state) =>( state.currentUserReducer))
    const urlMyResultsUserId= `http://localhost:4000/result/getMyResult/`+User?.result?._id;
    
    const [quizes, setQuizes] = useState(null)
    const [loading, setLoading] = useState(true);
    
    async function fetchSubject(){
      setLoading(true)
      const a = await axios.get(urlMyResultsUserId);
      setQuizes(a?.data?.data.result);
      setLoading(false);
    //   console.log(quizes[0].quizId.average);
    }
    useEffect(() => {
      fetchSubject();
    }, [])

    // const quizes = useSelector((state) => state.quizReducer?.data?.allQuiz);
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
                                        <p>{quiz?.quizId?.quizName}</p>
                                        <p>Average Score: {quiz?.quizId.average}</p>
                                    </div>
                                    <div>
                                        <p>{quiz?.quizId?.type} Quiz </p>
                                        <p>Created by {quiz?.quizId.authorName.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Your Score</p>
                                    <p> {quiz?.marks} / {quiz?.totalMarks}</p>
                                </div>
                                

                            </div>
                        ))

                    }

                </div>
            </div>
        </div>
    )
}

export default MyResults