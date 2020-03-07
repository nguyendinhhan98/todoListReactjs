import React, { Component } from 'react';

class ResultList extends Component {
    
   

    onUpdateResultList = () => {
        this.props.onUpdateStatusList(this.props.tasks.id)
    }

    onDelete = () => {
        this.props.onDeleteResultList(this.props.tasks.id)
    }

    onEditResult = () => {
        this.props.onEditResultList(this.props.tasks.id)
    }

    render() {
        const {tasks,index} = this.props

       
        return (

                <tr>
                    <td key={index}>{index + 1}</td>
                    <td>{tasks.name}</td>                                                              
                    <td className="text_center">
                        <span className={tasks.status === 
                                        true ? 'label label-danger center c text_center w50' : 'label label-success center c text_center w50'}
                                        onClick={this.onUpdateResultList}
                                        >{tasks.status === true ? 'Kích hoạt' : 'Ẩn'}</span>
                    </td>
                    <td> 
                        <div className="center">
                            <button type="button"
                                    className="btn btn-primary c mr-1"
                                    onClick={this.onEditResult}
                                    >Sửa</button>
                            <button type="button" 
                                    className="btn btn-danger c ml-1"
                                    onClick={this.onDelete}
                                    >Xóa</button>
                        </div>
                    </td>
                </tr>
            
        );
    }
}

export default ResultList;