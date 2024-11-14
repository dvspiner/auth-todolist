import TodoList from './components/TodoList.tsx'
import useTodoList from './hooks/todo-list.hook.ts'

const Main = () => {
  const { addTodo, updateTodo, removeTodo, todos } = useTodoList()


  return (
    <TodoList
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      editTodo={updateTodo}
      toggleTodo={removeTodo}
    />
  )
}

export default Main