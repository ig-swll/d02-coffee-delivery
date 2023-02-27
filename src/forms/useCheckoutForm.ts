import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import zod from 'zod'

const checkoutFormValidationSchema = zod.object({
  zipcode: zod.string().min(8, 'Digite um CEP válido').max(8),
  street: zod.string().min(1, 'Digite uma rua'),
  number: zod.number({
    required_error: 'Digite um número',
    invalid_type_error: 'Digite um número',
  }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Digite um bairro'),
  city: zod.string().min(1, 'Digite uma cidade'),
  state: zod.string().min(1, 'Selecione um estado'),
  paymentMethod: zod.union([
    zod.literal('debit'),
    zod.literal('credit'),
    zod.literal('cash'),
  ]),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function useCheckoutForm() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zipcode: '',
      street: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'credit',
    },
    shouldUseNativeValidation: false,
  })

  return checkoutForm
}
