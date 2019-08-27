import React, {Component} from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        "test1",
        "testy2",
        "test3",
        "testy4",
        "test5",
        "testy13",
        "test14",
        "testy15"
      ],
      filteredArray: [],
      userInput: ""
    };
  }

  handleChange(e) {
    this.setState({userInput: e});
  }

  filtersString(userInput) {
    let strArray = this.state.unfilteredArray;
    let filtered = [];

    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i].includes(userInput)) {
        filtered.push(strArray[i]);
      }
    }

    let result = {filteredArray: filtered};
    this.setState(result);

  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Unfiltered Array: {JSON.stringify(this.state.unfilteredArray)}{" "}
        </span>
        <input placeholder='Filter by string'
          onChange={e => this.handleChange(e.target.value)}
          className="inputLine"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => {
            this.filtersString(this.state.userInput);
          }}
          className="confirmationButton"
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Array: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
