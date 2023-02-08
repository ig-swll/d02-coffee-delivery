import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'
import {
  AddressHeader,
  CheckoutContainer,
  CheckoutForm,
  FormSection,
  PaymentHeader,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm>
        <h2>Complete seu pedido </h2>

        <FormSection>
          <AddressHeader>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressHeader>
          <AddressForm />
        </FormSection>
        <FormSection>
          <PaymentHeader>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentHeader>
          <PaymentMethod />
        </FormSection>
      </CheckoutForm>

      <div>
        <h2>Cafés selecionados</h2>
      </div>
    </CheckoutContainer>
  )
}
