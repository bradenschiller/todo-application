import React from 'react'
import Todo from './cardcomponents/Todo';
import AddButton from './cardcomponents/AddButton';


const Cards = ({todos, showModal}) => {
  return (
    <div className="card-grid">
        <div className="card">
        {todos.map(item => <Todo key={item} item={item}/>)}
        <AddButton showModal={showModal}/>
        </div>
        <div className="card">
            <div>
                <h1>Completed</h1>
            </div>
        </div>  
    </div>
    
  )
}

export default Cards
