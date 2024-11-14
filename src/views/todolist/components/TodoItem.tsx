import React, { useState } from 'react'
import { Todo } from '../types/todo'

interface TodoItemProps {
  todo: Todo;
  editTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, editTodo, removeTodo, toggleTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)
  console.log('mount todo item')
  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    editTodo({ ...todo, text: newText })
    setIsEditing(false)
  }

  return (
    <li className="flex items-center justify-between bg-white p-2 border-b border-gray-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="p-1 border border-gray-300 rounded"
          />
        ) : (
          <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-500 font-semibold hover:underline">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="text-blue-500 font-semibold hover:underline">
            Edit
          </button>
        )}
        <button onClick={() => removeTodo(todo.id)} className="text-red-500 font-semibold hover:underline">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem