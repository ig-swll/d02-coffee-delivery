import { CoffeeCard } from '../CoffeeCard'
import { CoffeeCardGrid, CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h3>Nossos cafés</h3>

      <CoffeeCardGrid>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeCardGrid>
    </CoffeeListContainer>
  )
}
