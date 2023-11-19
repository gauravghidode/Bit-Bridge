import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import QuestionList from '../../components/HomeMainbar/QuestionList';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const TagsList = () => {

  const location = useLocation();
  const tag = location.pathname.split('/')[2];
  const tagsList = [{
    _id:1,
    tagName: "javascript",
    tagDesc: "For question regarding javascript and its various implementations and dialects"
},
{
    _id:2,
    tagName: "DSA",
    tagDesc: "For questions regarding Data structures and algorithms"
},
{
    _id:3,
    tagName: "C++",
    tagDesc: "For questions regarding Cpp language and OOPs concepts in cpp"
},
{
    _id:4,
    tagName: "Java",
    tagDesc: "Question about java Programming."
},
{
    _id:5,
    tagName: "Network Security",
    tagDesc: "Questions about network security"
}]

  const subjectName = tagsList[tag-1].tagName;
  const questionList = useSelector( state => state.questionsReducer);
  const questionData = questionList?.data?.filter((question)=>{
    return (question.questionTags.indexOf(subjectName).toLowerCase()> -1);
  })

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
                            <QuestionList questionList={questionData}></QuestionList>
                        </div>
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default TagsList