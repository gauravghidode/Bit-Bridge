import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'

const AskQuestion = () => {
    
  return (
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Ask a public Question</h1>
                <form action="">
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Your title must summarize the problem</p>
                            <input type="text" name='questionTitle' id='ask-ques-title' placeholder='Example: How to center a div'/>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Describe your problem in detail</p>
                            <textarea name="questionBody" id="ask-question-body" cols='' rows="10" placeholder='Example: I want to center the div using flex property but I am unable to do so, here is my code.  '></textarea>
                            
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add tags to describe what your question is about</p>
                            <input type="text" name='questionTsag' id='ask-ques-tags' placeholder='Example: css html frontend'/>
                        </label>
                        <input type="submit" value='Review your question' className='review-btn'/>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AskQuestion