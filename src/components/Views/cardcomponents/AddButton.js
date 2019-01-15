import React from 'react';

const AddButton = ({showModal}) => {
    return (
        <div className="add-button-container">
            <button 
            className="add-button"
            onClick={() => showModal(true)}
            >
                Add Task
            </button>
        </div>
    )
}

export default AddButton;