import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
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
  const [amount, setAmount] = useState(1)

  function increaseAmount() {
    setAmount((state) => state + 1)
  }

  function decreaseAmount() {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
  }

  const { tags, name, description, image, price } = props

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
          <AddToCartButton type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </CardBottom>
    </Card>
  )
}
