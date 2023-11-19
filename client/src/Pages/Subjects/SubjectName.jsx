import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import QuestionList from '../../components/HomeMainbar/QuestionList';
import { useSelector } from 'react-redux';
import './Subject.css';

const SubjectName = () => {

    const subjectName = "DCN";
    const questionList = useSelector( state => state.questionsReducer);

    return (
        <div className='home-container-1'>
            <LeftSidebar></LeftSidebar>
            <div className='home-container-2'>
                <div className='main-bar'>
                    <div className='main-bar-header'>
                        <h1>{subjectName}</h1>
                        {/* <button onClick={checkAuth} className='ask-btn'>Ask Question</button> */}
                    </div>
                    <div>
                        {
                            questionList.data === null ?
                                <h1>Loading...</h1> :
                                <div>
                                    <p>{questionList.data.length} questions </p>
                                    <QuestionList questionList={questionList.data}></QuestionList>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectName