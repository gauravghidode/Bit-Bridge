const quizReducer = (state = {data: null}, action)=>{
    switch (action.type) {
        case "POST_QUIZ":
            return {...state }
        case "FETCH_ALL_QUIZ":
            {
                console.log("1");
                return {...state, data: action.payload}
            }
            
        default:
            console.log("2");
            return state;
    }
}


export default quizReducer