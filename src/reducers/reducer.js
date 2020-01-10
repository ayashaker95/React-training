const userReducer = (state = {
    word :"",
    letter: "",
    mistake: 0
}, action) => {
    switch (action.type) {
        case "SET_Mistake":
            state = {
                ...state,
                mistake: action.payload
            };
            break;
        case "SET_GuessedLetter":
            state = {
                ...state,
                letter: action.payload
            };
            break;
        case "SET_GuessedWord":
            state = {
                ...state,
                word: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;