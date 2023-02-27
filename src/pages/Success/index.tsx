import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import successIllustration from '../../assets/Illustration.svg'
import { ItemWithIcon } from '../../components/ItemWithIcon'
import { CartContext } from '../../contexts/CartContext'
import { OrderInfo, SuccessContainer, Title } from './styles'

export function Success() {
  const navigate = useNavigate()
  const { activeOrder } = useContext(CartContext)

  useEffect(() => {
    if (!activeOrder) {
      navigate('/')
    }
  }, [activeOrder, navigate])

  if (activeOrder === null) return <div>&nbsp;</div>

  const { street, number, neighborhood, city, state, paymentMethod } =
    activeOrder

  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>

      <section>
        <OrderInfo>
          <ItemWithIcon
            iconBgColor="purple"
            iconComponent={<MapPin size={16} weight="fill" />}
          >
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
              </p>
              <p>
                {neighborhood} - {city}, {state}
              </p>
            </div>
          </ItemWithIcon>

          <ItemWithIcon
            iconBgColor="yellow"
            iconComponent={<Timer size={16} weight="fill" />}
          >
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </ItemWithIcon>

          <ItemWithIcon
            iconBgColor="yellow-dark"
            iconComponent={<CurrencyDollar size={16} />}
          >
            <div>
              <p>Pagamento na entrega</p>

              {paymentMethod === 'credit' && <strong>Cartão de crédito</strong>}
              {paymentMethod === 'debit' && <strong>Cartão de débito</strong>}
              {paymentMethod === 'cash' && <strong>Dinheiro</strong>}
            </div>
          </ItemWithIcon>
        </OrderInfo>

        <img
          src={successIllustration}
          alt="Ilustração de um homem em uma moto com um pacote"
        />
      </section>
    </SuccessContainer>
  )
}
