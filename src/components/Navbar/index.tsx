import { MapPin, ShoppingCartSimple } from 'phosphor-react'

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
      <img src={coffeeDeliveryLogo} alt="Logo do Coffee Delivery" />

      <Actions>
        <Location>
          <MapPin weight="fill" size={22} />
          Brasília, DF
        </Location>
        <CartButton>
          <ShoppingCartSimple size={22} weight="fill" />
          <CartBadge>3</CartBadge>
        </CartButton>
      </Actions>
    </NavbarContainer>
  )
}
