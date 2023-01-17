import { Navbar } from '../../components/Navbar'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <div>
      <Navbar />

      <section>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <span>Compra simples e segura</span>
          <span>Embalagem mantém o café intacto</span>
          <span>Entrega rápida e rastreada</span>
          <span>O café chega fresquinho até você</span>
        </div>
      </section>

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
