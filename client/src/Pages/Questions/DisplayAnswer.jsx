import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import { Link, useLocation, useParams } from 'react-router-dom'
import moment from 'moment'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import {deleteAnswer} from '../../actions/question.js'

const DisplayAns = ({question}) => {
  const location = useLocation();
  const url = 'http://localhost:3000' + location.pathname;
  const User = useSelector((state) => (state.currentUserReducer))
  const dispatch = useDispatch();
  const {id} = useParams();
  const handleDelete = (answerId, noOfAnswers)=>{
    dispatch(deleteAnswer(id, answerId, noOfAnswers-1));
  }
  return (
    <div>
      {
        question.answer.map((ans)=>(
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className='question-actions-user'>
                <div>
                <CopyToClipboard text={url}>
                  <button type='button' onClick={ ()=>{alert(`Copied url: ${url}`)}}>Share</button>
                </CopyToClipboard>
                {
                  User?.result?._id === ans?.userId && (
                    <button type='button' onClick={()=>handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                  )
                }
                </div>
                <div>
                  <p>answered {moment(ans.answeredOn).fromNow()}</p>
                  <Link to={`/User/${question.userId}`} className='user-link' style={{color: '#white'}}>
                      <Avatar backgroundColor="white" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                      <div>
                          {ans.userAnswered}
                      </div>
                  </Link>
                </div>
            </div>
            
          </div>
        ))
      }
    </div>
  )
}

export default DisplayAns