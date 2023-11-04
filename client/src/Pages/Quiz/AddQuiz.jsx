import React, { useState } from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

const AddQuiz = () => {
    const [currentquiz, setCurrentQuiz] = useState([]);
    console.log(currentquiz);
    var obj = {}
    var temp = [];

    function addQuestion(e) {
        obj = {
            ques_id: String(Math.random()*10000),
            ques: document.getElementById("questionName").value,
            options: temp,
            ans: document.getElementById("correctOption").value,
            ans_desc: document.getElementById("answerDescription").value
        }

        setCurrentQuiz([...currentquiz, obj])
        currentquiz.push(obj);
        obj = {};
        temp = [];
        e.preventDefault();
        console.log(currentquiz);
    }

    function addOption() {
        temp.push(document.getElementById("option").value);
        document.getElementById("option").value = "";
    }

    return (
        <div className='home-container-1'>
            <LeftSidebar></LeftSidebar>
            <div className='home-container-2'>
                <div className="main-bar">
                    <div className="main-bar-header">
                        <h1>Create your own quiz</h1>
                    </div>
                    <div className="create-quiz-container">
                        <form action="">
                            <label htmlFor="" id='quizType'>Quiz type:</label><br />
                            <input type="radio" name='quizType' id='Assessment' />
                            <label htmlFor="Assessment">Assessment</label>
                            <input type="radio" name='quizType' id='Practice' />
                            <label htmlFor="Practice">Practice</label>
                            <p>Enter the name of quiz: <input type="text" id='quizName' /></p>
                            <br />
                            {
                                currentquiz?.map((question) => (
                                    <div className="quiz-question" key={question?._id}>
                                        <p>{question.ques}</p>
                                        <ol type="a">
                                            {
                                                question.options?.map((opt) => (
                                                    <li key={opt}>
                                                        <input type='radio' name={question.ques_id} id={question.ques_id + opt} />
                                                        <label htmlFor={question.ques_id + opt}>{opt}</label>
                                                    </li>
                                                ))
                                            }
                                            <div><p>Correct option: {question.ans}</p> <p>{question.ans_desc}</p></div>
                                        </ol>
                                    </div>
                                ))
                            }
                            <p>Question: <input type="text" name="" id="questionName" /></p>

                            <p>Options: <input id='option' type="text" /> <input type="button" value='Add option' onClick={addOption} /></p>
                            <p>Correct Option: <input type="text" name="" id="correctOption" /></p>
                            <p>Answer Description: <input type="text" id="answerDescription" /></p>
                            <input type="button" value='Add Question' onClick={addQuestion} />
                            <br />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuiz