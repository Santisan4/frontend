import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/user.tsx'

const root = document.getElementById('root')

if (root instanceof HTMLElement) {
  createRoot(root).render(
    <BrowserRouter>
      <UserProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </UserProvider>

    </BrowserRouter>
  )
}
