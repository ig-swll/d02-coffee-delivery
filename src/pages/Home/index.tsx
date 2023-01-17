import { Navbar } from '../../components/Navbar'
import { CoffeeCard } from './components/CoffeeCard'
import { Hero } from './components/Hero'

export function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <section>
        <h3>Nossos cafés</h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2.5rem 2rem',
          }}
        >
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </section>
    </div>
  )
}
