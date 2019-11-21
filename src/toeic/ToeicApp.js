import React, { Component } from 'react';
import Question from './Question';
import QUESTION_DATA from '../data/data';
import './ToeicApp.css';
import Player from '../components/Player.js';

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
        <Player source={conversation.audio}/>
        {conversation.audio}
      </div>
      {!this.state.isShownTapescript ? null :
        <div className="tapescript">
          {conversation.tapescript}
        </div>
      }
      <div className="questions">
        {/* {conversation.questions.map((item, index) => {
          return(
            <Question
              ref={(c) => { this.question = c; }}
              key={index.toString()}
              number={index+1}
              question={item.question} answers={item.answers}
            />
          )
        })} */}
        <Question
          ref={(c) => { this.question1 = c; }}
          number={1}
          question={conversation.questions[0].question} 
          answers={conversation.questions[0].answers}
        />
        <Question
          ref={(c) => { this.question2 = c; }}
          number={2}
          question={conversation.questions[1].question} 
          answers={conversation.questions[1].answers}
        />
        <Question
          ref={(c) => { this.question3 = c; }}
          number={3}
          question={conversation.questions[2].question} 
          answers={conversation.questions[2].answers}
        />
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
    const isShown = !this.state.isShownTapescript;
    this.setState({
      isShownTapescript: isShown
    });
  };

  handleScore = () => {
    console.log('handleScore');
  };

  handleAgain = () => {
    this.question1.reset();
    this.question2.reset();
    this.question3.reset();
  };

  handleNext = () => {
    console.log('handleNext');
  };
}

export default ToeicApp;
