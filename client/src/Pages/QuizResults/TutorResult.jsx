import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

const TutorResult = () => {
  
  const participants = [];

  return (
  <div className='home-container-1'>
    <LeftSidebar></LeftSidebar>
    <div className='home-container-2'>

        <div className='main-bar'>
            <div className="main-bar-header">
                <h1>Participants</h1>
                <h2>QuizName</h2>
            </div>
        </div>

        <div className="quizes-container">
            {
                participants?.map((participant, index) => (
                    <div className='quiz-name-container'>
                        <div className='quiz-name'>
                            <div>
                                <p>{index+1}. {participant?.name}</p>
                                <p>Average Score: {participant?.averageScore}</p>
                            </div>
                            <div>
                                <p>{participant?.type} Quiz </p>
                                <p>Created by {participant?.email}</p>
                            </div>
                        </div>
                        <p>Score: {participant?.score} / {participant?.total}</p>

                    </div>
                ))

            }
        </div>
    </div>
</div>
  )
}

export default TutorResult