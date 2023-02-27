import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'

import { CartContext } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/formatCurrency'
import {
  AddToCartButton,
  Card,
  CardBottom,
  Counter,
  Price,
  Tag,
  Info,
  Tags,
} from './styles'

export interface CoffeeCardProps {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { tags, name, description, image, price, id } = props

  const [amount, setAmount] = useState(1)

  const { addItemToCart } = useContext(CartContext)

  function increaseAmount() {
    setAmount((state) => state + 1)
  }

  function decreaseAmount() {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
  }

  function handleAddToCart() {
    addItemToCart({ id, image, name, price, quantity: amount })
    toast.success(
      `${amount} ${
        amount > 1 ? 'itens adicionados' : 'item adicionado'
      } ao carrinho`,
    )
    setAmount(1)
  }

  return (
    <Card>
      <img src={image} alt={`Foto de ${name}`} />
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Info>
        <strong>{name}</strong>
        <small>{description}</small>
      </Info>

      <CardBottom>
        <Price>
          <small>R$&nbsp;</small>
          <strong>{formatCurrency(price, 'short')}</strong>
        </Price>
        <div>
          <Counter>
            <button onClick={decreaseAmount}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{amount}</span>
            <button onClick={increaseAmount}>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>
          <AddToCartButton type="button" onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </CardBottom>
    </Card>
  )
}
