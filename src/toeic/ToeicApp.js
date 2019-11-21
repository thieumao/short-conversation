import React, { Component } from 'react';
import Question from './Question';
import QUESTION_DATA from '../data/data';
import './ToeicApp.css';

class ToeicApp extends Component {
  state={
    questions: QUESTION_DATA,
    isShownTapescript: false,
    index: 0,
  }

  render() {
    const { index, questions } = this.state; 
    const conversation = questions[index];
    return(
    <div className="container">
      <div className="player">
        {conversation.audio}
      </div>
      {!this.state.isShownTapescript ? null :
        <div className="tapescript">
          {conversation.tapescript}
        </div>
      }
      <div className="questions">
        {conversation.questions.map((item, index) => {
          return(
            <Question key={index.toString()} number={index+1} question={item.question} answers={item.answers} />
          )
        })}
      </div>
      <div className="buttons">
        <button onClick={() => this.handleTapescript()}>Tapescript</button>
        <button onClick={() => this.handleScore()}>Score</button>
        <button onClick={() => this.handleAgain()}>Again</button>
        <button onClick={() => this.handleNext()}>Next</button>
      </div>
    </div>
    )
  }

  handleTapescript = () => {
    const isShown = !this.state.isShownTapescript
    this.setState({
      isShownTapescript: isShown
    })
    console.log('handleTapescript');
  };

  handleScore = () => {
    console.log('handleScore');
  };

  handleAgain = () => {
    console.log('handleAgain');
  };

  handleNext = () => {
    console.log('handleNext');
  };
}

export default ToeicApp;
