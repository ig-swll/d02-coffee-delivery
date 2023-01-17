import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
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

const PAGE_URL = window.location.href

export function CoffeeCard() {
  const [amount, setAmount] = useState(1)
  console.log(PAGE_URL)
  function increaseAmount() {
    setAmount((state) => state + 1)
  }

  function decreaseAmount() {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
  }

  return (
    <Card>
      <img src="/images/Expresso.png" alt="" />
      <Tags>
        <Tag>TRADICIONAL</Tag>
        <Tag>TRADICIONAL</Tag>
        <Tag>TRADICIONAL</Tag>
      </Tags>
      <Info>
        <strong>Expresso Tradicional</strong>
        <small>O tradicional café feito com água quente e grãos moídos</small>
      </Info>

      <CardBottom>
        <Price>
          <small>R$&nbsp;</small>
          <strong>9,90</strong>
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
