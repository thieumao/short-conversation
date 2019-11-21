import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {

  state={
    index: 0,
  }

  handleAnswerClick = (index) => {
    this.setState({ index });
  }

  render() {
    return(
    <div className="container">
        <b>Question {this.props.number}: </b>
        <label>{this.props.question}</label>
        <ol type="A">
            {this.props.answers.map((answer, index) => {
              const style = this.state.index === index ? {color: 'red'} : {}
              return(
                <li
                  key={index.toString()}
                  style={style}
                  onClick={() => this.handleAnswerClick(index)}
                >
                  {answer}
                </li>)
            })}
        </ol>
    </div>
    )
  }
}

Question.propTypes = {
    number: PropTypes.number.isRequired,
    question: PropTypes.element.isRequired,
    answers: PropTypes.array.isRequired,
};

export default Question;
