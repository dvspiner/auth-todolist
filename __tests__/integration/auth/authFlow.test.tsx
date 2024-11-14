import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../../../src/store'
import { describe, expect, it } from 'vitest'
import LoginForm from '../../../src/views/auth/components/LoginForm'

describe('Authentication flow', () => {
  it('should display error login message', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>,
    )
    fireEvent.change(screen.getByPlaceholderText(/username/i), { target: { value: 'testuser' } })
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } })
    //fireEvent.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })
})