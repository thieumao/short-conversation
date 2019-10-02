import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const QuestionList = ({ index, questions, handleAnswerClick, handleEnterPress }) => {
  return (
    <ul className="question-list">
      <Question
        key={questions[index].question.props.children.toString()}
        index={index}
        question={questions[index].question}
        answers={questions[index].answers}
        handleAnswerClick={handleAnswerClick}
        handleEnterPress={handleEnterPress}
      />
    </ul>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default QuestionList;
