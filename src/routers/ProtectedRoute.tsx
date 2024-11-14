import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthCheck } from '../hooks/auth.hook'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuthCheck()

  if (loading) return <p>Loading...</p>

  return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoute