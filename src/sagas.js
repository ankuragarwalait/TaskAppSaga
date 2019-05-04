import { call, put, throttle, all, takeEvery, select, spawn} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as api from './api';
import * as actions from './actions';

function* getFilteredTodos({searchString}) {
    let todos = yield call(api.getFilteredTodos,'http://localhost:3001/todos',searchString);
    yield put(actions.populateTodos(todos));
}

function* addTodo({title, description}) {
    const newTodoId = (yield select(state=> state.todos)).length + 1;
    const todoData = {
        id: newTodoId,
        title,
        description,
        status: 'Not Started',
        duration: 0
    };
    let response = yield call(api.updateDb,todoData);
    yield put(actions.addTodo(response));
}

function* updateTodoStatus({id, status}) {
    yield spawn(api.changeTodoStatus,id,status)
}

function* syncDb() {
    yield call(delay, 1000);
    yield all((yield select(state=> state.todos)).map(todoItem => call(api.updateTimeSince,todoItem)))
}

function* getTodosSaga() {
    let todos = yield call(api.getTodos,'http://localhost:3001/todos');
    yield put(actions.populateTodos(todos));
}
function* updateTodoStatusSaga(){
    yield takeEvery('TOGGLE_TODO',updateTodoStatus);
}
function* addTodoSaga() {
    yield takeEvery('ADD_TODO_DB',addTodo);
}
function* searchSaga() {
    yield throttle(4000,'SEARCH_TODOS',getFilteredTodos);
}
function* updateTimeSinceSaga() {
    while(true) {
        yield call(delay,1000);
        const todos = (yield select(state=> state.todos)).map((todoItem) => {
            if(todoItem.status === 'In Progress'){
                todoItem.duration += 1;
            }
            return todoItem;
        });
        yield put(actions.populateTodos(todos));
    }
}
function* syncDbSaga() {
        yield takeEvery('TOGGLE_TODO', syncDb); 
        yield takeEvery('WINDOW_CLOSE',syncDb);    
}
export default function* rootSaga() {
    yield all([
        getTodosSaga(),
        searchSaga(),
        addTodoSaga(),
        updateTodoStatusSaga(),
        updateTimeSinceSaga(),
        syncDbSaga()
    ]);
}
