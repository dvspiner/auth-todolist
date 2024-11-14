import { useAppDispatch } from '../../../store'
import { useCallback } from 'react'
import { Todo } from '../types/todo.ts'
import { updateTodoRequest } from '../redux/actions.ts'

const useUpdateTodoList = () => {
  const dispatch = useAppDispatch()

  const updateTodo = useCallback((todo: Todo) => {
    dispatch(updateTodoRequest(todo))
  }, [dispatch])

  return {
    updateTodo,
  }
}

export default useUpdateTodoList