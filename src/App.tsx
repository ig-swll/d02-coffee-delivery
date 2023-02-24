import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { CartContextProvider } from './contexts/CartContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/checkout/success',
        element: <Success />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
