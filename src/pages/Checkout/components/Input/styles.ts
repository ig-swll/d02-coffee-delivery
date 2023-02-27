import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;

  > span {
    font-size: 0.75rem;
    color: red;
  }
`

export const InputElement = styled.input`
  display: flex;
  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  width: 100%;

  color: ${({ theme }) => theme['base-text']};

  outline-width: 1px;
  &:focus {
    outline-color: ${({ theme }) => theme['yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button,
  &[type='number'] {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield !important;
  }
`

export const HelperText = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0.75rem;
  pointer-events: none;
  user-select: none;
  padding: 0.75rem;
  color: ${({ theme }) => theme['base-label']};
`
