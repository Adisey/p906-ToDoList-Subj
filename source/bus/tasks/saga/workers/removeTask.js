// Core
import { put, apply } from 'redux-saga/effects';

//import { api } from '../../../../REST';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* removeTask ({ payload: taskId }) {
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер
        // const response = yield apply(api, api.task.remove, [taskId]);
        //
        // if (response.status !== 204) {
        //     throw new Error(message);
        // }
        yield put(tasksActions.removeTask(taskId));
    } catch (error) {
        yield put(uiActions.emitError(error, 'removeTask ${error}'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}