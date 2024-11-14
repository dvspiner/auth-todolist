import { AuthResponse, LoginCredentials } from '../types/authTypes.ts'
import axiosInstance from './axiosInstance.ts'


const mockCallLogin: AuthResponse = {
  user: {
    id: 'qsdsqdqsd', email: 'test@gmail.com', username: 'testuser',
  },
  token:"facke-tocken"
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  console.log(credentials)
  return new Promise<AuthResponse>((resolve) => {
    setTimeout(() => {
      resolve(mockCallLogin);
    }, 200);
  });
  /* try {
     const response = await axiosInstance.post<AuthResponse>('/auth/login', credentials)
     return response.data
   } catch (error) {
     console.log(error)
     throw new Error('Login failed')
   }*/
}


export const signUp = async (userInfo: { username: string; password: string }): Promise<object> => {
  try {
    return await axiosInstance.post('/signup', userInfo)
  } catch (error) {
    console.log(error)
    throw new Error('Sign-up failed')
  }
}

export const fetchAuthMe = async () => {
  return await axiosInstance.get('/auth/me');
};