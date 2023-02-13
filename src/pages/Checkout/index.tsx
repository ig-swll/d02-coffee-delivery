import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { AddressForm } from './components/AddressForm'
import { CartItem } from './components/CartItem'
import { PaymentMethods } from './components/PaymentMethods'
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
  return (
    <form>
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
            <CartItem />
            <SummaryInfo>
              <SummaryItem>
                <span>Total de Itens</span>
                <span>R$ 29,70</span>
              </SummaryItem>
              <SummaryItem>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </SummaryItem>
              <SummaryItem>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </SummaryItem>
            </SummaryInfo>
            <SubmitOrderButton type="submit">
              Confirmar Pedido
            </SubmitOrderButton>
          </SummaryContainer>
        </div>
      </CheckoutContainer>
    </form>
  )
}
