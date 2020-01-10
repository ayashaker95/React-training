import React, {Component} from 'react';
import "./keypad.scss";

class Keypad extends Component {

    PROGRAMING_LANG = ["java", "html", "css", "c", "php", "swift", "javascript", "python", "sql", "ruby", "mongodb", "json"];
    Letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    constructor(props) {
        super(props);
        this.state = {
            answer: this.PROGRAMING_LANG[Math.floor(Math.random() * this.PROGRAMING_LANG.length)],
            mistake: 0,
            guessedWord: new Set()
        };
        this.handleGuessedLetter = this.handleGuessedLetter.bind(this);
    }

    resetButton = () => {

        this.setState({
            mistake: 0,
            guessedWord: new Set(),
            answer: this.PROGRAMING_LANG[Math.floor(Math.random() * this.PROGRAMING_LANG.length)]
        });
    }

    handleGuessedLetter(evt) {

        let guessedLetter = evt.target.value;
        this.setState(st => ({
                guessedWord: st.guessedWord.add(guessedLetter),
                mistake: st.mistake + (st.answer.includes(guessedLetter) ? 0 : 1)
            }),
            () => this.props.onMistakesChange(
                this.state.mistake)
        );
    }

    guessedWord() {
        const {
            answer
        } = this.state;

        return this.state.answer.split("").map(letter => (
            this.state.guessedWord.has(letter) ? letter : " _ ")
        );
    }

    printLetter() {
        return this.Letters.map(letter => {
            return (
                <button
                    className={"letters"}
                    key={letter}
                    value={letter}
                    onClick={this.handleGuessedLetter}
                    disabled={this.state.guessedWord.has(letter)}
                >
                    {letter}
                </button>
            );
        });
    }

    render() {
        const maxWrong = 5;
        const lost = this.state.mistake >= maxWrong;
        const won = this.guessedWord().join("") === this.state.answer;
        let gameState = this.printLetter();
        if (lost) {
            gameState = "You Lost";
        }
        if (won) {
            gameState = "You Won";
        }

        return (
            <div className='Hangman'>
                <h2 className='question'>
                    Guess the Programming Language?
                </h2>
                <p className='correct-word'>
                    {!lost ? this.guessedWord() : this.state.answer}
                </p>
                <p className='hangman-state'>
                    {gameState}
                </p>
                <div className='rest-button'>
                    <button className='Hangman-reset'
                            onClick={this.resetButton}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

export default Keypad;