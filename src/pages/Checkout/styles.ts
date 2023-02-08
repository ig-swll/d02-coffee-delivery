import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 2.5rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.5fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CheckoutForm = styled.form`
  h2 {
    margin-bottom: 1rem;
  }
`

export const FormSection = styled.section`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  & + section {
    margin-top: 0.75rem;
  }
`

const FormSectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  > div {
    display: flex;
    flex-direction: column;

    p {
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
    }
  }
`

export const AddressHeader = styled(FormSectionHeader)`
  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const PaymentHeader = styled(FormSectionHeader)`
  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  #cep {
    grid-column: span 1;
  }

  #rua {
    grid-column: span 3;
  }

  #complemento {
    grid-column: span 2;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;

    grid-column: span 1;

    #cep {
      grid-column: span 1;
    }

    #rua {
      grid-column: span 1;
    }

    #complemento {
      grid-column: span 1;
    }
  }
`

export const Input = styled.input`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;

  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};

    &::before {
      position: absolute;
      content: 'teste';
      top: 0;
      right: 0;
    }
  }
`

export const Select = styled.select`
  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  display: flex;
  color: ${({ theme }) => theme['base-text']};

  &:invalid {
    color: ${({ theme }) => theme['base-label']};
  }
`

export const PaymentMethods = styled.fieldset`
  display: flex;
  gap: 0.75rem;
  border: none;
  width: 100%;
  place-content: center;

  div {
    display: flex;
    flex: 1;

    label {
      cursor: pointer;
      display: flex;
      padding: 1rem;
      align-items: center;
      flex: 1;
      background-color: ${({ theme }) => theme['base-button']};
      border-radius: 6px;
      gap: 0.5rem;
      text-transform: uppercase;
      line-height: 160%;
      font-size: 0.75rem;
      user-select: none;
      border: 1px solid transparent;
      transition: 0.15s ease-in-out;

      svg {
        color: ${({ theme }) => theme.purple};
      }
    }

    input {
      display: none;
      &:checked + label {
        background-color: ${({ theme }) => theme['purple-light']};
        border-color: ${({ theme }) => theme.purple};
      }
    }
  }
`
