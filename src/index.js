import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {todoitem} from './reducers/ToDoItemReducer';
import {todos} from './reducers/ToDosReducer';
import {showAddTodo} from './reducers/AddToDoReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const todoApp = combineReducers({
    todoitem,
    todos,
    showAddTodo
})

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(todoApp,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
<Provider store={store}>
    <App store={store}/>
</Provider>, document.getElementById('root'));
