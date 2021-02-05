import React, { Component } from "react";
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      userAnswer: " ",
    };
  }
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }

  componentDidMount() {
    this.getNewQuestion();
  }

  updateScore(event) {}

  render() {
    console.log(this.state.data);
    console.log(this.state.userAnswer);
    if (!this.state.data.id) {
      return <div></div>;
    }
    return (
      <div>
        <form className="answerSubmission" onSubmit={this.updateScore}>
          <label>What's Your Answer:</label>
          <input type="text" name="userAnswer" />
          <input type="submit" value={this.state.userAnswer} />
        </form>
        <div className="Score">Player Score: {this.state.score}</div>
        <div className="questionArea">
          <p>Question: {this.state.data.question}</p>
          <p>Category: {this.state.data.category.title}</p>
          <p>Point Value: {this.state.data.value}</p>
        </div>
      </div>
    );
  }
}
export default Jeopardy;
