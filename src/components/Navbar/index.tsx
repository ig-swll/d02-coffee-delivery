import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/Logo.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  Actions,
  CartButton,
  Location,
  NavbarContainer,
  CartBadge,
} from './styles'

export function Navbar() {
  const { items } = useContext(CartContext)

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
          {items.length > 0 && <CartBadge>{items.length}</CartBadge>}
        </CartButton>
      </Actions>
    </NavbarContainer>
  )
}
