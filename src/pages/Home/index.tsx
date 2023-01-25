import { Navbar } from '../../components/Navbar'
import { Hero } from './components/Hero'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <CoffeeList />
      </main>
    </div>
  )
}
