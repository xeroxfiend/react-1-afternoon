import React, {Component} from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  handleChange(value, propName) {
    this.setState({[propName]: value})
  }

  sumNums(num1, num2) {
    this.setState({sum : parseInt(num1, 10) + parseInt(num2, 10)})
    
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>

        <input placeholder='num1'
          onChange={e => this.handleChange(e.target.value, 'number1')}
          className="inputLine"
          type="text"
          name=""
          id=""
        />

        <input placeholder='num2'
          onChange={e => this.handleChange(e.target.value, 'number2')}
          className="inputLine"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => {
            this.sumNums(this.state.number1, this.state.number2);
          }}
          className="confirmationButton"
        >
          Add 'em!
        </button>
        <span className="resultsBox filterStringRB">
          Sum: {JSON.stringify(this.state.sum)}
        </span>
      </div>
    );
  }
}

export default Sum;
