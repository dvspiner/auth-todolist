import { RootState } from '../../../store'
import useRemoveTodoList from './remove-todo-list.hook.ts'
import useAddTodoList from './add-todo-list.hook.ts'
import useFetchTodoList from './fetch-todo-list.hook.ts'
import { useSelector } from 'react-redux'
import useUpdateTodoList from './update-todo-list.hook.ts'

const useTodoList = () => {
  const { loading, error, todos } = useSelector((state: RootState) => state.todo)
  const { removeTodo } = useRemoveTodoList()
  const { addTodo } = useAddTodoList()
  const { updateTodo } = useUpdateTodoList()
  useFetchTodoList()

  return {
    addTodo,
    removeTodo,
    updateTodo,
    todos,
    loading,
    error,
  }
}

export default useTodoList