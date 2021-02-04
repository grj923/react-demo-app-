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
    return (
      <div>
        {JSON.stringify(this.state.data)}
        <ul>
          <li className="questionArea">
            Question: {this.state.data.question} ?
          </li>
          <li>Category: {this.state.data.category_id}</li>
          <li>Point Value: {this.state.data.value}</li>
        </ul>
      </div>
    );
  }
}
export default Jeopardy;
