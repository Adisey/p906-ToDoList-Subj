// Core
import { put, apply } from 'redux-saga/effects';

//import { api } from '../../../../REST';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* completeTask ({ payload:  task }) {
    console.log(`completeTask -> tasksActions ->`, tasksActions);
    try {
        yield put(uiActions.startSpinning());
        // Когда будет сервер
        // const response = yield apply(api, api.tasks.edit, [task]);
        // if (response.status !== 204) {
        //     throw new Error(message);
        // }
        // А пока так ----------
        task.completed = !task.completed;
        // А пока так ==========
        yield put(tasksActions.completeTask(task));
    } catch (error) {
        yield put(uiActions.emitError(error, 'completeTask ${error}'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
