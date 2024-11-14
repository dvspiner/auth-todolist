import React, { useState } from 'react'
import { Todo } from '../types/todo'

interface AddTodoFormProps {
  addTodo: (todo: Todo) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo({ id: Date.now().toString(), text: text, completed: false })
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodoForm
