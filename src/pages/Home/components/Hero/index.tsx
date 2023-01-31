import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCoffee from '../../../../assets/img-hero.png'
import { ItemWithIcon } from '../../../../components/ItemWithIcon'
import { HeroContainer, MainText, SellingPoints } from './styles'

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

        <SellingPoints>
          <ItemWithIcon
            iconComponent={<ShoppingCart weight="fill" size={16} />}
            text="Compra simples e segura"
            iconBgColor="yellow-dark"
          />
          <ItemWithIcon
            iconComponent={<Package weight="fill" size={16} />}
            text="Embalagem mantém o café intacto"
          />
          <ItemWithIcon
            iconComponent={<Timer weight="fill" size={16} />}
            text="Entrega rápida e rastreada"
            iconBgColor="yellow"
          />
          <ItemWithIcon
            iconComponent={<Coffee weight="fill" size={16} />}
            text="O café chega fresquinho até você"
            iconBgColor="purple"
          />
        </SellingPoints>
      </div>
      <img
        src={imageCoffee}
        alt="Imagem de um copo de café com grãos em volta"
      />
    </HeroContainer>
  )
}
