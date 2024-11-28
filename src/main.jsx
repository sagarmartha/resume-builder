import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingInPage from './auth/signin/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/auth/signin',
    element:<SingInPage/>
   }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
