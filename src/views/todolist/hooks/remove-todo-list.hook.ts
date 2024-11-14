import { useAppDispatch } from '../../../store'
import { removeTodoRequest } from '../redux/actions.ts'
import { useCallback } from 'react'

const useRemoveTodoList = () => {

  const dispatch = useAppDispatch()

  const removeTodo = useCallback((id: string) => {
    dispatch(removeTodoRequest(id))
  }, [dispatch])

  return {
    removeTodo,
  }
}

export default useRemoveTodoList