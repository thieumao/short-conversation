import React, { Component } from 'react';

class Question extends Component {

  state={
    index: -1,
    isCorrect: false,
    isShownCorrect: false,
  }

  handleAnswerClick = (i) => {
    const isCorrect = this.props.correct === i;
    this.setState({ 
      index: i,
      isCorrect: isCorrect
    });
  }

  reset = () => {
    this.setState({
      index: -1,
      isCorrect: false,
      isShownCorrect: false
    });
  }

  showCorrectAnswer = () => {
    this.setState({
      isShownCorrect: true
    });
  }

  render() {
    return(
    <div className="container">
        <b>Question {this.props.number}: </b>
        <label>{this.props.question}</label>
        <ol type="A">
            {this.props.answers.map((answer, index) => {
              let style = this.state.index === index ? {color: 'red'} : {}
              if (this.state.isShownCorrect && this.state.index === index && this.state.isCorrect) {
                style = {color:'blue'}
              }
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

// Question.propTypes = {
//   correct: PropTypes.number.isRequired,
//   number: PropTypes.number.isRequired,
//   question: PropTypes.string.isRequired,
//   answers: PropTypes.array.isRequired,
// };

export default Question;
