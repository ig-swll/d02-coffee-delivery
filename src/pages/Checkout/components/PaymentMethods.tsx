import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { PaymentMethodsContainer } from '../styles'

export function PaymentMethods() {
  const { register } = useFormContext()

  return (
    <PaymentMethodsContainer>
      <div>
        <input
          id="credit"
          type="radio"
          value="credit"
          defaultChecked={true}
          {...register('paymentMethod')}
        />
        <label htmlFor="credit">
          <CreditCard size={16} />
          Cartão de crédito
        </label>
      </div>

      <div>
        <input
          id="debit"
          type="radio"
          value="debit"
          {...register('paymentMethod')}
        />
        <label htmlFor="debit">
          <Bank size={16} />
          Cartão de débito
        </label>
      </div>

      <div>
        <input
          id="cash"
          type="radio"
          value="cash"
          {...register('paymentMethod')}
        />
        <label htmlFor="cash">
          <Money size={16} />
          Dinheiro
        </label>
      </div>
    </PaymentMethodsContainer>
  )
}
