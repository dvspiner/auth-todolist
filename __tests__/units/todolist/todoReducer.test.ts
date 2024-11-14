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
} from '../../../src/views/todolist/redux/actions'
import { Todo } from '../../../src/views/todolist/types/todo'
import { describe, expect, it } from 'vitest'
import todoReducer from '../../../src/views/todolist/redux/reducer'

describe('todoReducer', () => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  }

  const mockTodo: Todo = { id: '1', text: 'Test todo', completed: true }


  it('should handle fetchTodoListRequest', () => {
    const action = fetchTodoListRequest()
    const state = todoReducer(initialState, action)
    expect(state).toEqual({ ...initialState, loading: true })
  })

  it('should handle fetchTodoListSuccess', () => {
    const todos: Todo[] = [{ id: '1', text: 'Test todo', completed: false }]
    const action = fetchTodoListSuccess(todos)
    const state = todoReducer({ ...initialState, loading: true }, action)
    expect(state).toEqual({ ...initialState, todos, loading: false })
  })

  it('should handle fetchTodoListFailure', () => {
    const error = 'Failed to fetch todos'
    const action = fetchTodoListFailure(error)
    const state = todoReducer({ ...initialState, loading: false }, action)
    expect(state).toEqual({ ...initialState, error, loading: false })
  })

  it('should handle addTodoRequest', () => {
    const action = addTodoRequest(mockTodo)
    const state = todoReducer(initialState, action)
    expect(state).toEqual({ ...initialState, loading: true })
  })

  it('should handle addTodoSuccess', () => {
    const action = addTodoSuccess(mockTodo)
    const state = todoReducer({ ...initialState, loading: true }, action)
    expect(state).toEqual({ ...initialState, loading: false })
  })

  it('should handle addTodoFailure', () => {
    const error = 'Failed to add todo'
    const action = addTodoFailure(error)
    const state = todoReducer({ ...initialState, loading: true }, action)
    expect(state).toEqual({ ...initialState, error, loading: false })
  })

  it('should handle updateTodoRequest', () => {
    const action = updateTodoRequest(mockTodo)
    const state = todoReducer(initialState, action)
    expect(state).toEqual({ ...initialState, loading: true })
  })

  it('should handle updateTodoSuccess', () => {
    const action = updateTodoSuccess(mockTodo)
    const state = todoReducer({ ...initialState, loading: true }, action)
    expect(state).toEqual({ ...initialState, loading: false })
  })

  it('should handle updateTodoFailure', () => {
    const error = 'Failed to update todo'
    const action = updateTodoFailure(error)
    const state = todoReducer({ ...initialState, loading: true }, action)
    expect(state).toEqual({ ...initialState, error, loading: false })
  })

  it('should handle removeTodoRequest', () => {
    const action = removeTodoRequest(mockTodo.id)
    const state = todoReducer(initialState, action)
    expect(state).toEqual({ ...initialState, loading: true })
  })

  it('should handle removeTodoSuccess', () => {
    const initialTodos: Todo[] = [{ id: '1', text: 'Test todo', completed: true }]
    const action = removeTodoSuccess(mockTodo.id)
    const state = todoReducer({ ...initialState, todos: initialTodos, loading: true }, action)
    expect(state).toEqual({ ...initialState, todos: [], loading: false })
  })

  it('should handle removeTodoFailure', () => {
    const error = 'Failed to remove todo'
    const action = removeTodoFailure(error)
    const state = todoReducer({ ...initialState, loading: true }, action)
    expect(state).toEqual({ ...initialState, error, loading: false })
  })
})
