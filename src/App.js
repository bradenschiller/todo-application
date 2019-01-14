import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/Views/NavBar';
import './App.css';
import MainTitle from './components/Views/MainTitle';
import Cards from './components/Views/Cards';
import Modal from 'react-awesome-modal';

import { setTask } from './actions';

const mapStateToProps = state => {
  return {
    task: state.task 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeValue: (event) => dispatch(setTask(event.target.value))
  }
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [],
      visible: false
    }
  }


  addTask = () => {
    if (this.props.task.length > 0){
    this.state.todos.push(this.props.task)
    this.setState({ visible: false })
    document.getElementById('addTask').value = '';
    } else {
      this.setState({ visible: false })
      return null;
    }
    
  }

  showModal = () => {
    this.setState({ visible: true })
  }

  componentDidMount(){
    console.log(this.props)
  }

  
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
            <MainTitle />
            <Cards todos={this.state.todos} showModal={this.showModal}/>
        </div>
        <Modal className="modal" visible={this.state.visible} width="400" height="300">
          <div className="modal-container">
            <h1>Add a task</h1>
            <input id="addTask" type="text" placeholder="Add Task" onChange={(e) => this.props.onChangeValue(e)} />
            <input type="text" placeholder="Add Time"/>
            <button onClick={() => this.addTask()}>Add Task</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

