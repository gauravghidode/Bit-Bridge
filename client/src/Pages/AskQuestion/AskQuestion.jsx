import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../actions/question.js'
import './AskQuestion.css'

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) =>( state.currentUserReducer ))

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(questionTitle, questionBody, questionTags);
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name}, navigate))

    }

    const handleEnter = (e)=>{
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n");
        }
    }

  return (
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Ask a public Question</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Your title must summarize the problem</p>
                            <input type="text" name='questionTitle' id='ask-ques-title' placeholder='Example: How to center a div' onChange={(e)=>{setQuestionTitle(e.target.value)}} />
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Describe your problem in detail</p>
                            <textarea name="questionBody" id="ask-question-body" cols='' rows="10" onChange={(e)=>{setQuestionBody(e.target.value)}} onKeyUp={handleEnter}  placeholder='Example: I want to center the div using flex property but I am unable to do so, here is my code.  '></textarea>
                            
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add tags to describe what your question is about</p>
                            <input type="text" name='questionTsag' id='ask-ques-tags' onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}} placeholder='Example: css html frontend'/>
                        </label>
                        <input type="submit" value='Review your question' className='review-btn border-gradient border-gradient-purple grad-btn'/>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AskQuestion