import moment from 'moment'
import React from 'react'
import {Link} from 'react-router-dom'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='display-question-details'>
            <Link to={`/Questions/${question._id}`}className='question-title-link'>{question.questionTitle}</Link>
            <div className='display-tags-time'>
                <div className='display-tags'>
                    {
                        question.questionTags.map((tag) => (
                            <div>
                                <p className="all-tags" key={tag}>{tag}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='display-time'>
                <p>
                    Asked {moment(question.askedOn).fromNow()} by {question.userPosted}
                </p>
                </div>
                
            </div>
        </div>
        <div className='display-votes-ans'>
            <p>{question.upVote.length - question.downVote.length}</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
    </div>
  )
}

export default Questions