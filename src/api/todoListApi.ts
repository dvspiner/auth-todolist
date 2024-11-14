import axiosInstance from './axiosInstance.ts'
import { Todo } from '../views/todolist/types/todo.ts'


export const getTodos = async (): Promise<Todo[]> => {

  try {
    const response = await axiosInstance.get<Todo[]>('/todos')
    return response.data
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}


export const createTodo = async (todo: Todo): Promise<Todo> => {

  try {
    const response = await axiosInstance.post<Todo>('/todos', todo)
    return response.data
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}


export const updateTodo = async (id: string, todo: Todo): Promise<Todo> => {
  try {
    const response = await axiosInstance.put<Todo>('/todos/' + id, todo)
    return response.data
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}


export const deleteTodo = async (id: string): Promise<Todo> => {

  try {
    const response = await axiosInstance.delete('/todos/' + id)
    return response.data
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
