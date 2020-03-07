import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="dropdown ml-15">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sắp Xếp
                    <span className="caret"></span>
                </button>
                    <ul className="dropdown-menu">
                        <li><a href="/">A-Z</a></li>
                        <li><a href="/">Z-A</a></li>
                        <li><a href="/">Trạng Thái</a></li>
                    </ul>
            </div>
        );
    }
}

export default Sort;