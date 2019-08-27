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

    filtersObject(userInput) {
        let family = this.state.unfilteredArray
        let filtered = []
        
        for (let i = 0; i < family.length; i++) {
            // console.log(this.state.unfilteredArray)
            for (let prop in family[i]) {
                // console.log(this.state.unfilteredArray)
                if (prop === userInput) {
                    // console.log('prop' + prop)
                    filtered.push(family[i])                    
                    // console.log('ui' + userInput)
            
                }
            }
        } 

        let result = {filteredArray: filtered};
        this.setState(result)
        
        this.setState({filteredArray: filtered})
        // console.log(filteredArray)            
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Unfiltered Array: {JSON.stringify(this.state.unfilteredArray)} </span>
                <input placeholder='Filter by property' onChange={(e) => this.handleChange(e.target.value)} className='inputLine' type="text" name="" id=""/>
                <button onClick={() => {this.filtersObject(this.state.userInput)} } className='confirmationButton'>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilteredObjects