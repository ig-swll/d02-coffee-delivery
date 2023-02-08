import { FormGroup, Input, Select } from '../styles'

export function AddressForm() {
  return (
    <FormGroup>
      <Input
        id="cep"
        name="cep"
        placeholder="CEP"
        type="text"
        pattern="[0-9]*"
      />
      <Input id="rua" name="rua" placeholder="Rua" type="text" />
      <Input name="numero" placeholder="Número" type="text" />
      <Input
        id="complemento"
        name="complemento"
        placeholder="Complemento"
        type="text"
      />
      <Input name="bairro" placeholder="Bairro" type="text" />
      <Input name="cidade" placeholder="Cidade" type="text" />
      <Select name="uf" placeholder="UF" required>
        <option value="" disabled selected hidden>
          UF
        </option>
        <option value="DF">DF</option>
        <option value="GO">GO</option>
      </Select>
    </FormGroup>
  )
}
