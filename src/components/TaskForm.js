import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id :''  ,
            name : '',
            status : true
        }
    }

    componentDidMount() {
        if(this.props.edit){
            this.setState({
                id : this.props.edit.id,
                name : this.props.edit.name,
                status : this.props.edit.status
            })
        }
        
    }
    

    close = () => {
        this.props.onCloseForm()
    }

    onHandleChange = (event) => {
        // const {target: {name, value}} = event
        const target = event.target
        const name = target.name
        let value = target.value
        if(name === "status"){
            value = target.value === "true" ? true : false
        }
            
        this.setState({
            [name] : value
        })
        
    }
    onSubmit = (event) => {

        // console.log(this.state);
        
        event.preventDefault()
        this.props.onSubmitt(this.state)
        this.onClear()
        this.close()
        
    }

    onClear = () => {
        this.setState({
            name : '',
            status : false
        })
    }

    render() {
        // const {id} = this.state
        return (
            
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title ">
                        {/* {id === '' ? 'Thêm Công Việc' : 'Cập Nhật'} */}
                        Quản lý công việc
                    <i className="fas fa-times text_right"
                       onClick={this.close} 
                        ></i>
                    </h3>
                        
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label >Tên :</label>
                            <input type="text" 
                                   className="form-control" 
                                   value={this.state.name}
                                   name="name"
                                   onChange={this.onHandleChange}
                                   />
                        </div>
                        <div className="form-group">
                            <label >Trạng Thái :</label>
                            <select name="status" 
                                    value={this.state.status}
                                    className="form-control" 
                                    onChange={this.onHandleChange}
                                    >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <div className="center">
                            <button type="submit"
                                    className="btn btn-primary c mr-1"
                                    
                                    >Lưu lại</button>
                            <button type="reset" 
                            className="btn btn-danger c ml-1"
                            onClick={this.onClear}
                            >Hủy bỏ</button>
                        </div>
                    </form>    
                </div>
            </div>
        );
    }
}

export default TaskForm;