import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentMethods } from '../styles'

export function PaymentMethod() {
  return (
    <PaymentMethods>
      <div>
        <input
          id="credit"
          type="radio"
          name="paymentMethod"
          value="credit"
          defaultChecked={true}
        />
        <label htmlFor="credit">
          <CreditCard size={16} />
          Cartão de crédito
        </label>
      </div>

      <div>
        <input id="debit" type="radio" name="paymentMethod" value="debit" />
        <label htmlFor="debit">
          <Bank size={16} />
          Cartão de débito
        </label>
      </div>

      <div>
        <input id="cash" type="radio" name="paymentMethod" value="cash" />
        <label htmlFor="cash">
          <Money size={16} />
          Dinheiro
        </label>
      </div>
    </PaymentMethods>
  )
}
