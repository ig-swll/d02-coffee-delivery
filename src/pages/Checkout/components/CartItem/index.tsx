import { useState } from 'react'
import { Trash, Minus, Plus } from 'phosphor-react'
import { Separator } from '../../styles'
import { CoffeeItem, Counter, ButtonsContainer } from './styles'

export function CartItem() {
  const [amount, setAmount] = useState(1)

  function increaseAmount() {
    setAmount((state) => state + 1)
  }

  function decreaseAmount() {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
  }

  return (
    <>
      <CoffeeItem>
        <img src="/images/Americano.png" alt="Imagem do café Americano" />
        <div>
          <p>Americano</p>
          <ButtonsContainer>
            <Counter>
              <button onClick={decreaseAmount}>
                <Minus size={14} weight="bold" />
              </button>
              <span>{amount}</span>
              <button onClick={increaseAmount}>
                <Plus size={14} weight="bold" />
              </button>
            </Counter>
            <button type="button">
              <Trash size={16} />
              Remover
            </button>
          </ButtonsContainer>
        </div>
        <span>R$ 9,90</span>
      </CoffeeItem>
      <Separator />
    </>
  )
}
