import * as api from '../api'

export const createQuiz = (quizData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.postQuiz(quizData)
        dispatch({type: "POST_QUIZ", payload: data});
        // console.log(data);
        // navigate('/');
    } catch (error) {
        console.log(error);
        // console.log('Error ho riya h');
        // console.log(quizData);
    }
}

// export const postQuizQuestions = (quizQuestionData, navigate) => async (dispatch) => {
//     try {
//         const {data} = await api.postQuizQuestions(quizQuestionData)
//         dispatch({type: "POST_QUIZ_QUESTION", payload: data})
//         navigate('/Quiz')
//     } catch (error) {
//         console.log(error);
//     }
// }