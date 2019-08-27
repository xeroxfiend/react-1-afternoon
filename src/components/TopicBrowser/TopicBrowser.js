import React, {Component} from 'react'

import EvenAndOdd from '../Topics/EvenAndOdd'
import FilteredObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

class TopicBrowser extends Component {
    render() {
        return <div>
            <EvenAndOdd />
            <FilteredObject />
            <FilterString />
            <Palindrome />
            <Sum />            
        </div>
    }
}

export default TopicBrowser