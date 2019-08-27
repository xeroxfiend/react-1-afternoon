import React, {Component} from 'react'

class Palindrome extends Component {
    constructor() {
        super();
    
        this.state = {
          palindrome: '',
          userInput: ''
        }
      }
    
      handleChange(e) {
        this.setState({userInput: e});
      }
    
      palindrome(userInput) {

        // console.log(userInput)
        if (userInput === userInput.split('').reverse().join('')) {
            console.log(userInput.split('').reverse().join(''))
            this.setState({palindrome: true})
        } else {
            console.log(userInput.split('').reverse().join(''))
            this.setState({palindrome: false})
        }
        

      }
    
      render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
       
            <input
              onChange={e => this.handleChange(e.target.value)}
              className="inputLine"
              type="text"
              name=""
              id=""
            />
            <button
              onClick={() => {
                this.palindrome(this.state.userInput);
              }}
              className="confirmationButton"
            >
              Palindrome?
            </button>
            <span className="resultsBox filterStringRB">
              Palindrome? {JSON.stringify(this.state.palindrome)}
            </span>
          </div>
        )
      }
}

export default Palindrome