export function setMistake(mistake) {
    return {
        type: "SET_Mistake",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        })
    };
}

export function setGuessedLetter(letter) {
    return {
        type: "SET_GuessedLetter",
        payload: letter
    };
}

export function setGuessedWord(word) {
    return {
        type: "SET_GuessedWord",
        payload: word
    };
}