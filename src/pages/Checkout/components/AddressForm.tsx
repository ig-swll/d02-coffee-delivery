import { useFormContext } from 'react-hook-form'

import { Select } from './Select'
import { Input } from './Input'
import { UFs } from '../../../assets/ufs'
import { CheckoutFormData } from '../../../forms/useCheckoutForm'
import { FormGroup } from '../styles'

export function AddressForm() {
  const { register, formState } = useFormContext<CheckoutFormData>()
  const { dirtyFields, errors } = formState

  return (
    <FormGroup>
      <Input
        id="cep"
        placeholder="CEP"
        pattern="[0-9]*"
        maxLength={8}
        error={errors.zipcode?.message}
        {...register('zipcode')}
      />
      <Input
        id="rua"
        placeholder="Rua"
        type="text"
        error={errors.street?.message}
        {...register('street')}
      />
      <Input
        placeholder="Número"
        type="number"
        error={errors.number?.message}
        {...register('number', { valueAsNumber: true })}
      />
      <Input
        id="complemento"
        placeholder="Complemento"
        helperText="Opcional"
        isDirty={dirtyFields.complement}
        error={errors.complement?.message}
        {...register('complement')}
      />
      <Input
        placeholder="Bairro"
        error={errors.neighborhood?.message}
        {...register('neighborhood')}
      />
      <Input
        placeholder="Cidade"
        error={errors.city?.message}
        {...register('city')}
      />
      <Select
        placeholder="UF"
        id="uf"
        error={errors.state?.message}
        {...register('state')}
      >
        <option value="" disabled hidden>
          UF
        </option>
        {UFs.map((uf) => (
          <option key={uf.nome} value={uf.sigla}>
            {uf.sigla}
          </option>
        ))}
      </Select>
    </FormGroup>
  )
}
