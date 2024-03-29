import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import Player from './Player.js';

const Quiz = ({ isShownTapescript, step, questions, totalQuestions, score, handleTapescript, handleScore, handleAgain, handleNext, handleAnswerClick, handleEnterPress }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Question</h2>
          <div>
            <div className="question-number">{step}</div>
            <div className="question-number">{step+1}</div>
            <div className="question-number">{step+2}</div>
          </div>
          <div className="description">of <span>{totalQuestions}</span></div>
        </div>
        <h1>TOEIC Quiz</h1>
        <div className="score-container">
          <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">points</div>
        </div>
      </header>

      <div className="questions">
        <div className="player">
          <Player source={questions[step - 1].audio} />
        </div>
        {isShownTapescript && <div>Thieu Mao</div>}
        <button onClick={handleTapescript}>Tapescript</button>
        <button onClick={handleScore}>Score</button>
        <button onClick={handleAgain}>Again</button>
        <button onClick={handleNext}>Next</button>
        <QuestionList
          index={step}
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
        <QuestionList
          index={step+1}
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
        <QuestionList
          index={step+2}
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
      </div>
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default Quiz;
