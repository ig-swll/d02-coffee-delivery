import { useContext, useEffect } from 'react'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { FormProvider } from 'react-hook-form'

import { CartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { AddressForm } from './components/AddressForm'
import { CartItem } from './components/CartItem'
import { PaymentMethods } from './components/PaymentMethods'

import { useCheckoutForm, CheckoutFormData } from '../../forms/useCheckoutForm'
import {
  AddressHeader,
  CheckoutContainer,
  CheckoutSection,
  SummaryContainer,
  PaymentHeader,
  SummaryItem,
  SummaryInfo,
  SubmitOrderButton,
} from './styles'

export function Checkout() {
  const { items, setActiveOrder, activeOrder } = useContext(CartContext)

  const navigate = useNavigate()

  const checkoutForm = useCheckoutForm()
  const { handleSubmit, formState } = checkoutForm
  const { isValid } = formState

  const itemsPrice = items.reduce((acc, curr) => {
    const { price, quantity } = curr
    return acc + price * quantity
  }, 0)
  const deliveryFee = items.length > 0 ? 3.5 : 0
  const finalPrice = itemsPrice + deliveryFee

  function handleCheckout(data: CheckoutFormData) {
    setActiveOrder(data)
  }

  useEffect(() => {
    if (activeOrder) {
      navigate('/checkout/success')
    }
  }, [activeOrder, navigate])

  return (
    <form onSubmit={handleSubmit(handleCheckout)}>
      <FormProvider {...checkoutForm}>
        <CheckoutContainer>
          <div>
            <h2>Complete seu pedido </h2>
            <CheckoutSection>
              <AddressHeader>
                <MapPinLine size={22} />
                <div>
                  <p>Endereço de entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </AddressHeader>
              <AddressForm />
            </CheckoutSection>

            <CheckoutSection>
              <PaymentHeader>
                <CurrencyDollar size={22} />
                <div>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </PaymentHeader>
              <PaymentMethods />
            </CheckoutSection>
          </div>

          <div>
            <h2>Cafés selecionados</h2>

            <SummaryContainer>
              {items.map((item) => (
                <CartItem
                  key={item.name}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}

              <SummaryInfo>
                <SummaryItem>
                  <span>Total de Itens</span>
                  <span>{formatCurrency(itemsPrice ?? 0)}</span>
                </SummaryItem>
                <SummaryItem>
                  <span>Entrega</span>
                  <span>{formatCurrency(deliveryFee)}</span>
                </SummaryItem>
                <SummaryItem>
                  <strong>Total</strong>
                  <strong>{formatCurrency(finalPrice)}</strong>
                </SummaryItem>
              </SummaryInfo>
              <SubmitOrderButton
                type="submit"
                disabled={!isValid || items.length === 0 || !!activeOrder}
              >
                Confirmar Pedido
              </SubmitOrderButton>
            </SummaryContainer>
          </div>
        </CheckoutContainer>
      </FormProvider>
    </form>
  )
}
