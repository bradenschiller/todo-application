import React from 'react'
import 'pretty-checkbox';

const Todo = ({item}) => {
  return (
    <div className="todo">
    <div className="input-container">
    <div  className="pretty p-icon p-round p-fill p-jelly">
        <input type="checkbox" />
        <div className="state p-success">
          <i className="icon fa fa-check"></i>
          <label>{item}</label>
        </div>
      </div>
    </div>
      <p className="todo-time">5:00pm</p>
    </div>
  )
}

export default Todo



