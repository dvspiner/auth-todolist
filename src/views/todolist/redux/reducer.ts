import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../types/todo.ts'
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  fetchTodoListFailure,
  fetchTodoListRequest,
  fetchTodoListSuccess,
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  updateTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
} from './actions.ts'

type TodoState = {
  todos: Todo[];
  loading: boolean;
  error: string | null
}

const initialState: TodoState = {
  todos: [],
  error: null,
  loading: false,
}
const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchTodoListRequest, (state: TodoState) => {
    state.loading = true
  }).addCase(fetchTodoListSuccess, (state: TodoState, action: PayloadAction<Todo[]>) => {
    state.todos = action.payload
    state.loading = false
  }).addCase(fetchTodoListFailure, (state: TodoState, action: PayloadAction<string>) => {
    state.error = action.payload
  })
    .addCase(addTodoRequest, (state: TodoState) => {
      state.loading = true
    })
    .addCase(addTodoSuccess, (state: TodoState) => {
      state.loading = false
    })
    .addCase(addTodoFailure, (state: TodoState, action) => {
      state.loading = false
      state.error = action.payload
    })
    .addCase(updateTodoRequest, (state: TodoState) => {
      state.loading = true
    })
    .addCase(updateTodoSuccess, (state: TodoState) => {
      state.loading = false
    })
    .addCase(updateTodoFailure, (state: TodoState, action) => {
      state.loading = false
      state.error = action.payload
    })
    .addCase(removeTodoRequest, (state: TodoState) => {
      state.loading = true
    })
    .addCase(removeTodoFailure, (state: TodoState, action) => {
      state.loading = false
      state.error = action.payload
    })
    .addCase(removeTodoSuccess, (state: TodoState, action) => {
      state.loading = false
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    })
})

export default todoReducer