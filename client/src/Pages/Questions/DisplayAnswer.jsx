import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import { Link, useLocation, useParams } from 'react-router-dom'
import moment from 'moment'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {toast} from 'react-hot-toast'

import {deleteAnswer} from '../../actions/question.js'

const DisplayAns = ({question}) => {
  const location = useLocation();
  const url = 'https://bitbrige.netlify.app' + location.pathname;
  const User = useSelector((state) => (state.currentUserReducer))
  const dispatch = useDispatch();
  const {id} = useParams();
  const handleDelete = (answerId, noOfAnswers)=>{
    dispatch(deleteAnswer(id, answerId, noOfAnswers-1));
  }
  // console.log(question);
  console.log(User);
  return (
    <div>
      {
        question.answer.map((ans)=>(
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className='question-actions-user'>
                <div>
                <CopyToClipboard text={url}>
                  <button type='button' onClick={ ()=>{toast.success(`Copied url: ${url}`)}}>Share</button>
                </CopyToClipboard>
                {
                  (User?.result?._id === ans?.userId  || User?.result?.role==='admin') && (
                    <button type='button' onClick={()=>handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                  )
                }
                </div>
                <div>
                  <p>answered {moment(ans.answeredOn).fromNow()}</p>
                  <Link to={`/Users/${ans.userId}`} className='user-link' style={{color: '#white'}}>
                      <Avatar backgroundColor="white" px="2px" py="2px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
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