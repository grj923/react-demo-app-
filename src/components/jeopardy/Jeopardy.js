import React, { Component } from "react";
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
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

  render() {
    console.log(this.state.data);
    if (!this.state.data.id) {
      return <div></div>;
    }
    return (
      <div>
        <form className="answerSubmission">
          <label>
            What's Your Answer:
            <input type="text" name="Answer" />
          </label>
          <input type="submit" value="Am I Right?" />
        </form>
        <div className="Score">Player Score: {this.state.score}</div>
        <div className="questionArea">
          <p>Question: {this.state.data.question}</p>
          <p>Category: {this.state.data.category_id}</p>
          <p>Point Value: {this.state.data.value}</p>
        </div>
      </div>
    );
  }
}
export default Jeopardy;
