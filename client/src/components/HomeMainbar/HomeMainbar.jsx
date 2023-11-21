import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
import './HomeMainbar.css';
import QuestionList from './QuestionList';
import toast from 'react-hot-toast';
import { filteredQuestion } from '../Navbar/Searchbar';

const HomeMainbar = () => {

    console.log(filteredQuestion);
    const user=1;
    const navigate=useNavigate()
    
    const checkAuth=()=>{
        if(user==null){
            toast.error("Login or Signup to ask a question");
            navigate('/Auth');
        }
        else{
            navigate('/AskQuestion');
        }
    }
    const questionList = useSelector( state => state.questionsReducer);
    const location = useLocation();


  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
                location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
            }
            <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>
            {
                questionList.data===null?
                <h1>Loading...</h1>:
                <div>
                    <p>{filteredQuestion.length} questions </p>
                    <QuestionList questionList={questionList.data}></QuestionList>
                </div>
            }
        </div>
    </div>
  )
}

export default HomeMainbar;