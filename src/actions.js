import { CHANGE_TASK } from './constants';

export const setTask = (text) => ({
    type: CHANGE_TASK,
    payload: text
});