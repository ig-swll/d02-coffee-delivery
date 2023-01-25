import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCoffee from '../../../../assets/img-hero.png'
import {
  HeroContainer,
  MainText,
  SellingPoint,
  SellingPointsGrid,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <MainText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </MainText>

        <SellingPointsGrid>
          <SellingPoint>
            <span>
              <ShoppingCart weight="fill" size={16} />
            </span>
            Compra simples e segura
          </SellingPoint>
          <SellingPoint>
            <span>
              <Package weight="fill" size={16} />
            </span>
            Embalagem mantém o café intacto
          </SellingPoint>
          <SellingPoint>
            <span>
              <Timer weight="fill" size={16} />
            </span>
            Entrega rápida e rastreada
          </SellingPoint>
          <SellingPoint>
            <span>
              <Coffee weight="fill" size={16} />
            </span>
            O café chega fresquinho até você
          </SellingPoint>
        </SellingPointsGrid>
      </div>
      <img
        src={imageCoffee}
        alt="Imagem de um copo de café com grãos em volta"
      />
    </HeroContainer>
  )
}
