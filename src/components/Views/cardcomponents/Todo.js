import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <input id="todo-item" type="checkbox"/>
        <label for="todo-item">Take out the trash</label>
        <p className="todo-time">5:00pm</p>
      </div>
    )
  }
}



