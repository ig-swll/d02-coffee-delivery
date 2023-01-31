import { Outlet } from 'react-router-dom'

import { Navbar } from '../../components/Navbar'
import { LayoutContainer } from './styles'

export function MainLayout() {
  return (
    <LayoutContainer>
      <Navbar />

      <Outlet />
    </LayoutContainer>
  )
}
