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
    score: 0,
    isShownScore: false,
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
          correct={conversation.questions[0].correct}
        />
        <Question
          ref={(c) => { this.question2 = c; }}
          number={2}
          question={conversation.questions[1].question} 
          answers={conversation.questions[1].answers}
          correct={conversation.questions[1].correct}
        />
        <Question
          ref={(c) => { this.question3 = c; }}
          number={3}
          question={conversation.questions[2].question} 
          answers={conversation.questions[2].answers}
          correct={conversation.questions[2].correct}
        />
      </div>
      { !this.state.isShownScore ? null :
        <div className="score">
          <label>You have answered {this.state.score} out of 3 questions correctly!</label>
        </div>
      }
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
    let score = 0;
    if (this.question1.state.isCorrect) score += 1;
    if (this.question2.state.isCorrect) score += 1;
    if (this.question3.state.isCorrect) score += 1;
    this.question1.showCorrectAnswer();
    this.question2.showCorrectAnswer();
    this.question3.showCorrectAnswer();
    this.setState({ 
      isShownScore: true,
      score
    });
  };

  handleAgain = () => {
    this.question1.reset();
    this.question2.reset();
    this.question3.reset();

    this.setState({
      score: 0,
      isShownScore: false
    });
  };

  handleNext = () => {
    console.log('handleNext');
  };
}

export default ToeicApp;
