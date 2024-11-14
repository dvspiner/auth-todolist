import React from 'react'

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">Welcome to Our App</h1>
          <p className="text-gray-500">Please sign in to continue</p>
        </div>
        {children}
      </div>
    </div>
  )
}


export default AuthLayout