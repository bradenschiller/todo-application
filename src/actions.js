import { CHANGE_TASK } from './constants';

export const setTask = (text) => {
    console.log(text);
    return {
        type: CHANGE_TASK,
        payload: text
    }
};