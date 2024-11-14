import { useAppDispatch } from '../../../store'
import { useCallback } from 'react'
import { Todo } from '../types/todo.ts'
import { addTodoRequest } from '../redux/actions.ts'

const useAddTodoList = () => {
  const dispatch = useAppDispatch()

  const addTodo = useCallback((todo: Todo) => {
    dispatch(addTodoRequest(todo))
  }, [dispatch])

  return {
    addTodo,
  }
}

export default useAddTodoList