import { useAppDispatch } from '../../../store'
import { useCallback, useEffect } from 'react'
import { fetchTodoListRequest } from '../redux/actions.ts'

const useFetchTodoList = () => {
  const dispatch = useAppDispatch()

  const fetchTodo = useCallback(() => {
    dispatch(fetchTodoListRequest())
  }, [dispatch])

  useEffect(() => {
    fetchTodo()
  }, [fetchTodo])


  return {
    fetchTodo,
  }

}

export default useFetchTodoList