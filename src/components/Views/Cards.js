import React from 'react'
import Todo from './cardcomponents/Todo';
import AddButton from './cardcomponents/AddButton';


const Cards = () => {
  return (
    <div className="card-grid">
        <div className="card">
        <Todo />
        <AddButton />
        </div>
        <div className="card">
            <ul>
                <li>todo</li>
                <li>todo</li>
                <li>todo</li>
                <li>todo</li>
            </ul>
        </div>  
    </div>
    
  )
}

export default Cards
