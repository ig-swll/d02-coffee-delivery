import { CoffeeCard } from '../CoffeeCard'
import { CoffeeCardGrid, CoffeeListContainer } from './styles'
import { coffeeList } from '../../../../assets/coffeeData'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h3>Nossos cafés</h3>

      <CoffeeCardGrid>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </CoffeeCardGrid>
    </CoffeeListContainer>
  )
}
