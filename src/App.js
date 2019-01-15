import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/Views/NavBar';
import './App.css';
import MainTitle from './components/Views/MainTitle';
import Cards from './components/Views/Cards';
import Modal from 'react-awesome-modal';

import { setTask, setTaskValue, setModal } from './actions';

const mapStateToProps = state => {
  return {
    task: state.changeTaskValue.task,
    todo: state.changeTaskValue.todo,
    visible: state.changeTaskValue.visible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeValue: (event) => dispatch(setTask(event.target.value)),
    addTask: (item, visibility) => dispatch(setTaskValue(item, visibility)),
    showModal: (value) => dispatch(setModal(value))
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
            <MainTitle />
            <Cards todos={this.props.todo} showModal={this.props.showModal}/>
        </div>
        <Modal className="modal" visible={this.props.visible} width="400" height="300">
          <div className="modal-container">
            <h1>Add a task</h1>
            <input id="addTask" type="text" placeholder="Add Task" onChange={(e) => this.props.onChangeValue(e)} />
            <input type="text" placeholder="Add Time"/>
            <button onClick={() => this.props.addTask(this.props.task, false)}>Add Task</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

