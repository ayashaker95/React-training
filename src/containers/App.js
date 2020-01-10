import React, {Component} from 'react';
import './App.css';
import Body from "../components/hangman-body/Body.js";
import Keypad from "../components/keypad/keypad.js";
import connect from "react-redux/lib/connect/connect";
import {setGuessedLetter, setMistake, setGuessedWord } from "../actions/userAction";
import { getUser } from "../store/userSelector";
import store from "../store/store";
class App extends Component {

    render() {
        return (
            <div className="Hangman">
                <Body mistake={this.props.userReducer.mistake}/>
                <Keypad onMistakesChange={this.props.setMistake(4)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: getUser(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMistake: (mistake) => {
            dispatch(setMistake(mistake));
        },
        setGuessedLetter: (letter) =>{
            dispatch(setGuessedLetter(letter))
        },
        setGuessedWord : (word) =>{
            dispatch(setGuessedWord(word))
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

