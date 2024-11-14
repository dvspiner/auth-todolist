import { call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  addTodoFailure,
  addTodoRequest,
  fetchTodoListFailure,
  fetchTodoListRequest,
  fetchTodoListSuccess, removeTodoFailure, removeTodoRequest, updateTodoFailure, updateTodoRequest,
} from './actions.ts'
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../../api/todoListApi.ts'
import { Todo } from '../types/todo.ts'
import { TodoListSagaGenerator } from '../types/saga.ts'


function* getTodoList(): TodoListSagaGenerator<Todo[]> {
  try {
    const result = yield call(getTodos)
    yield  put(fetchTodoListSuccess(result))
  } catch (e) {
    console.log(e)
    yield put(fetchTodoListFailure('An error occurred when trying to list todo'))
  }
}

function* addTodo(action: ReturnType<typeof addTodoRequest>) {
  try {
    yield call(createTodo, action.payload)
    yield call(getTodoList)
  } catch (e) {
    console.log(e)
    yield put(addTodoFailure('An error occurred when trying to create todo'))
  }
}

function* editTodo(action: ReturnType<typeof updateTodoRequest>) {
  try {
    yield call(updateTodo, action.payload.id, action.payload)
    yield call(getTodoList)
  } catch (e) {
    console.log(e)
    yield put(updateTodoFailure('An error occurred when trying to edit todo'))
  }
}

function* removeTodo(action: ReturnType<typeof removeTodoRequest>) {
  try {
    yield call(deleteTodo, action.payload)
    yield call(getTodoList)
  } catch (e) {
    console.log(e)
    yield put(removeTodoFailure('An error occurred when trying to remove todo'))
  }
}

function* watchRemoveTodoListRequest() {
  yield takeLatest(removeTodoRequest.type, removeTodo)
}

function* watchUpdateTodoListRequest() {
  yield takeLatest(updateTodoRequest.type, editTodo)
}

function* watchAddTodoListRequest() {
  yield takeLatest(addTodoRequest.type, addTodo)
}

function* watchFetchTodoListRequest() {
  yield takeEvery(fetchTodoListRequest, getTodoList)
}


const todosSagas = [fork(watchFetchTodoListRequest), fork(watchAddTodoListRequest), fork(watchUpdateTodoListRequest), fork(watchRemoveTodoListRequest)]

export default todosSagas