import { CHANGE_TASK, TASK_VALUE, CHANGE_MODAL } from './constants';

const initalState = {
    task: '',
    todo: [],
    visible: false
};


export const changeTaskValue = (state=initalState, action={}) => {
    switch(action.type){
        case TASK_VALUE:
            return Object.assign({}, state, {todo: state.todo.concat(action.payload), visible: action.visible});
        case CHANGE_MODAL:
            return Object.assign({}, state, {visible: action.payload});
        case CHANGE_TASK: 
            return Object.assign({}, state, {task: action.payload});
        default: 
            return state;
    }
}
