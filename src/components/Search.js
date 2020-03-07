import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className=" w50 float_left">
                <input type="text" className="form-control" placeholder="Nhập từ khóa" />
               
                </div>
                <div className="float_left">
                    <button type="search" className="btn btn-primary ">Tìm </button>
                </div>
            </div>
            
        );
    }
}

export default Search;