import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import SignUpForm from './views/auth/components/SignUpForm'
import HomePage from './pages/HomePage'
import ProtectedRoute from './routers/ProtectedRoute'
import LazyLoader from './components/common/lazy-loader'

const LoginForm = lazy(() => import('./views/auth/components/LoginForm'))
const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={LazyLoader({ show: true, delay: 600 })}></Suspense>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App