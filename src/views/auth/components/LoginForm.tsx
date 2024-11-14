import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
 import { RootState, useAppDispatch } from '../../../store'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../../layouts/AuthLayout'
import { loginRequest } from '../redux/auth.slice'

const LoginForm: React.FC = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const isLoading = useSelector((state: RootState) => state.auth.loading)
  const error = useSelector((state: RootState) => state.auth.error)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(loginRequest({ username, password }))
  }

  return (<AuthLayout>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <p className="text-black">Chargement en cours ...</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  </AuthLayout>)
}

export default LoginForm