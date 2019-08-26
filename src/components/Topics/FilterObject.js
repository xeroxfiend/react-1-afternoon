import React, {Component} from 'react'

class FilteredObjects extends Component {
    constructor() {
        super()

        this.state = {
            unfilteredArray: [
                {
                    name: 'Brian',
                    age: 31,
                    job: false
                },
                {
                    name: 'Mary',
                    hair: 'red',
                    job: true
                },
                {
                    name: 'Julia',
                    age: 29,
                    hair: 'blonde'
                }
            ], 
            filteredArray: [], 
            userInput: ''
        }
    }

    handleChange(e) {
        this.setState({userInput: e})        
    }

    filterObject(uInput) {

    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Unfiltered Array: {JSON.stringify(this.state.unfilteredArray)} </span>
                <input onChange={(e) => this.handleChange(e.target.value)} className='inputLine' type="text" name="" id=""/>
                <button onClick={() => {this.assignEvenAndOdds(this.state.userInput)} } className='confirmationButton'>Split</button>
                <span className='resultsBox filterObjectRB'>Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilteredObjects