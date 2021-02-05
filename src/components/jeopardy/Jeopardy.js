import React, { Component } from "react";
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        answer: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesubmit");
    if (this.state.formData.answer === this.state.data.answer) {
      console.log("match");
      this.setState((state, props) => ({
        score: state.score + state.data.value,
        formData: {
          answer: "",
        },
      }));
    } else {
      console.log("nomatch");
      this.setState((state, props) => ({
        score: state.score - state.data.value,
        formData: {
          answer: "",
        },
      }));
    }
    this.getNewQuestion();
  };

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
      return <div>Loading</div>;
    }
    return (
      <div>
        <div className="questionArea">
          <br />
          <h4>Question:</h4>
          <p>{this.state.data.question}</p>
          <h4>Category:</h4>
          <p>{this.state.data.category.title}</p>
          <h4>Point Value:</h4>
          <p>{this.state.data.value}</p>
        </div>
        <div className="Score">
          <h5>Player Score:</h5>
          <p>{this.state.score}</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>What's Your Answer?</label>
          <br />
          <input
            type="text"
            name="answer"
            onChange={this.handleChange}
            value={this.state.formData.answer}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Jeopardy;
