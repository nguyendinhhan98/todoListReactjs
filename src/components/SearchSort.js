import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'
class SearchSort extends Component {
    render() {
        return (
            <div className="mt-15"> 
                <Search/>
                <Sort/>
            </div>
        );
    }
}

export default SearchSort;