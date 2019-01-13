import { CHANGE_TASK } from './constants';

const initalState = {
    task: ''
};

export const changeTask = (state=initalState, action={}) => {
    switch(action.type){
        case CHANGE_TASK: 
            return Object.assign({}, state, task:  action.payload);
    }
};