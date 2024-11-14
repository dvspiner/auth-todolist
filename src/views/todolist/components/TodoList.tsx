import { Todo } from '../types/todo.ts'
import AddTodoForm from './AddTodoForm.tsx'
import TodoItem from './TodoItem.tsx'
import React from 'react'

interface TodoListProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
 
const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, editTodo, removeTodo, toggleTodo }) => {
  return (
    <div className="max-w-xl mx-auto p-4  ">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList