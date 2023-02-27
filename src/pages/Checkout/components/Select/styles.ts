import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > span {
    font-size: 0.75rem;
    color: red;
  }
`

export const SelectElement = styled.select`
  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  color: ${({ theme }) => theme['base-text']};

  outline-width: 1px;
  &:focus {
    outline-color: ${({ theme }) => theme['yellow-dark']};
  }

  &:invalid {
    color: ${({ theme }) => theme['base-label']};
  }
`
