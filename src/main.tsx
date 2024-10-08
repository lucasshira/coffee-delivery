import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import React from 'react'
import { Cart } from './pages/Cart/index.tsx'
import { Success } from './pages/Success/index.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderId/success',
        element: <Success />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
