import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/Logo.svg'
import {
  Actions,
  CartButton,
  Location,
  NavbarContainer,
  CartBadge,
} from './styles'

export function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="Logo do Coffee Delivery" />
      </Link>

      <Actions>
        <Location>
          <MapPin weight="fill" size={22} />
          Brasília, DF
        </Location>
        <CartButton to="/checkout">
          <ShoppingCartSimple size={22} weight="fill" />
          <CartBadge>3</CartBadge>
        </CartButton>
      </Actions>
    </NavbarContainer>
  )
}
