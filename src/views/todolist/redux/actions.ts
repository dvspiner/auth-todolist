import { createAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todo.ts'

export const fetchTodoListRequest = createAction('todo/fetchTodoListRequest');
export const fetchTodoListSuccess = createAction<Todo[]>('todo/fetchTodoListSuccess');
export const fetchTodoListFailure = createAction<string>('todo/fetchTodoListFailure');

export const addTodoRequest = createAction<Todo>('todo/addTodoRequest');
export const addTodoSuccess = createAction<Todo>('todo/addTodoSuccess');
export const addTodoFailure = createAction<string>('todo/addTodoFailure');

export const updateTodoRequest = createAction<Todo>('todo/updateTodoRequest');
export const updateTodoSuccess = createAction<Todo>('todo/updateTodoSuccess');
export const updateTodoFailure = createAction<string>('todo/updateTodoFailure');

export const removeTodoRequest = createAction<string>('todo/removeTodoRequest');
export const removeTodoSuccess = createAction<string>('todo/removeTodoSuccess');
export const removeTodoFailure = createAction<string>('todo/removeTodoFailure');