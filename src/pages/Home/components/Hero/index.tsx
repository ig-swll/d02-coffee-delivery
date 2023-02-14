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
            iconBgColor="yellow-dark"
          >
            Compra simples e segura
          </ItemWithIcon>
          <ItemWithIcon iconComponent={<Package weight="fill" size={16} />}>
            Embalagem mantém o café intacto
          </ItemWithIcon>
          <ItemWithIcon
            iconComponent={<Timer weight="fill" size={16} />}
            iconBgColor="yellow"
          >
            Entrega rápida e rastreada
          </ItemWithIcon>
          <ItemWithIcon
            iconComponent={<Coffee weight="fill" size={16} />}
            iconBgColor="purple"
          >
            O café chega fresquinho até você
          </ItemWithIcon>
        </SellingPoints>
      </div>
      <img
        src={imageCoffee}
        alt="Imagem de um copo de café com grãos em volta"
      />
    </HeroContainer>
  )
}
