import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 2.5rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.5fr 1fr;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  & > div {
    h2 {
      margin-bottom: 1rem;
    }
  }
`

export const AddressForm = styled.form`
  h2 {
    margin-bottom: 1rem;
  }
`

export const CheckoutSection = styled.section`
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
  grid-template-columns: 1fr 1fr min-content;
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

export const PaymentMethodsContainer = styled.fieldset`
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    div {
      label {
        justify-content: center;
      }
    }
  }
`

export const SummaryContainer = styled(CheckoutSection)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 0.875rem;
  }
  span + span {
    font-size: 1rem;
  }
  strong {
    font-size: 1.25rem;
  }
`

export const SubmitOrderButton = styled.button`
  margin-top: 1.5rem;
  font-size: 0.75rem;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-weight: 700;

  outline-width: 1px;
  &:focus {
    outline-color: ${({ theme }) => theme['yellow-dark']};
  }

  &:disabled {
    background-color: ${({ theme }) => theme['base-button']};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
