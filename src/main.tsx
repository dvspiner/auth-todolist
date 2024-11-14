import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/base.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
