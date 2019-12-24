
import React, { Component } from 'react';
import './App.css';
import Body from "../components/hangman-body/Body.js";
import Keypad from "../components/keypad/keypad.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
    };
  }

  render() {
    return (
        <div className="Hangman">
          <Body mistake={this.state.mistake} />
          <Keypad onMistakesChange={(mistake) => {
            this.setState ({
              mistake
            });
            console.log(mistake)}}/>
        </div>
    );
  }
}

export default App;