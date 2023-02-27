import { useContext } from 'react'
import { Trash, Minus, Plus } from 'phosphor-react'

import { formatCurrency } from '../../../../utils/formatCurrency'
import { CartContext } from '../../../../contexts/CartContext'

import { CoffeeItem, Counter, ButtonsContainer, Separator } from './styles'

interface CartItemProps {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

export function CartItem(props: CartItemProps) {
  const { id, name, image, price, quantity } = props
  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    useContext(CartContext)

  function handleIncreaseQuantity() {
    increaseItemQuantity(id)
  }

  function handleDecreaseQuantity() {
    decreaseItemQuantity(id)
  }

  function handleRemoveItem() {
    removeItemFromCart(id)
  }

  return (
    <>
      <CoffeeItem>
        <img src={image} alt={`Imagem do café ${name}`} />
        <div>
          <p>{name}</p>
          <ButtonsContainer>
            <Counter>
              <button onClick={handleDecreaseQuantity} type="button">
                <Minus size={14} weight="bold" />
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncreaseQuantity} type="button">
                <Plus size={14} weight="bold" />
              </button>
            </Counter>
            <button type="button" onClick={handleRemoveItem}>
              <Trash size={16} />
              Remover
            </button>
          </ButtonsContainer>
        </div>
        <span>{formatCurrency(price ?? 0)}</span>
      </CoffeeItem>
      <Separator />
    </>
  )
}
