import { CHANGE_TASK, TASK_VALUE, CHANGE_MODAL } from './constants';

export const setTask = (text) => ({
    type: CHANGE_TASK,
    payload: text
});


export const setTaskValue = (item, visibility) => ({
    type: TASK_VALUE,
    payload: item,
    visible: visibility
})


export const setModal = (visibility) => ({
    type: CHANGE_MODAL,
    payload: visibility
})