import './App.css';
import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import SearchSort from './components/SearchSort'
import Result from './components/Result';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            tasks : [],  // id : unique , name , status : true , false
            isDisplayForm : false,
            taskEditing : null
        }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount() {
        if(localStorage && localStorage.getItem('tasks')){
            const tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({ 
                tasks : typeof tasks === 'string' ? [] : tasks
            })
        }
    }
   
    randomId (){
        return '_' + Math.random().toString(36).substr(2, 9); 
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }
    
    onClose = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
        
    }

    onDelete = (id) => {
        const {tasks} = this.state
        const task = tasks.findIndex(i => i.id ===id)
        tasks.splice(task,1)
        this.setState({
            tasks : tasks
        })
        
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    

    onRecive = (data) => {
        const {tasks} = this.state
        if(data.id === ''){
            data.id = this.randomId()
            tasks.push(data)
        }else{
            let task = this.findId(data.id)
            tasks[task] = data
        }
        
        this.setState({
            tasks : tasks
        })

        
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    

    onUpdate = (id) => {
        const {tasks} = this.state
        // const index = this.findId(id)
        const task = tasks.findIndex(i => i.id === id)
        tasks[task].status = !tasks[task].status
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    findId = (id) => {
        
        const {tasks} = this.state
        let result = -1
        tasks.forEach((i,index) => {
            //  
            
            if(i.id === id){
                result = index
            }
        })
        return result
        
    }

    onEditApp = (id) => {
        const {tasks} = this.state
        const task = tasks.findIndex(i => i.id === id)
        const taskEditing = tasks[task]
        
        if(this.state.isDisplayForm === false){
            this.setState({
                isDisplayForm : !this.state.isDisplayForm
            })
        } 

        this.setState({
            taskEditing : taskEditing
        })

        // console.log(this.state.taskEditing);
        
    }
    
  render() {
    // const tasks = this.state.tasks  // const {task} = this.state (es6)
    const isDisplayForm = this.state.isDisplayForm
    const taskEditing = this.state.taskEditing
    const eleTabForm = isDisplayForm ? <TaskForm 
                                     onCloseForm={this.onClose} 
                                     onSubmitt= {this.onRecive}
                                     edit={taskEditing}
                                     /> : ''
    return (
        <div className="container">
            <div>
                <h1 className="text_center">Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                    {eleTabForm}
                </div>
                <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <div>
                        <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={this.onToggleForm}
                        >Thêm Công Việc</button>

                    </div>
                    
                    <SearchSort />
                    <div className="mt-15">

                        <Result  
                        tasks ={this.state.tasks} 
                        onDeleteResult={this.onDelete}
                        onUpdateStatus={this.onUpdate}
                        onEdit={this.onEditApp}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;


