import React from 'react'
import QuestionDetails from './QuestionDetails'
import Avatar from '../../components/Avatar/Avatar'
import { Link } from 'react-router-dom'

const DisplayAns = ({question}) => {
  return (
    <div>
      {
        question.answer.map((ans)=>(
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className='question-actions-user'>
                <button type = "button">Share</button>
                <button type = "button">Delete</button>
            </div>
            <div>
              <p>Answered on {ans.answeredOn}</p>
              <Link to={`/User/${question.userId}`} className='user-link' style={{color: '#white'}}>
                  <Avatar backgroundColor="white" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                  <div>
                      {ans.userAnswered}
                  </div>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayAns