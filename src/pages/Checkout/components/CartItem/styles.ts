import styled from 'styled-components'

export const Separator = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme['base-button']};
  margin: 1.5rem 0;
`

export const CoffeeItem = styled.div`
  padding: 0.5rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > span {
    margin-left: auto;
    align-self: flex-start;
    font-weight: 700;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  div + button {
    display: flex;
    place-content: center;
    align-items: center;
    gap: 0.25rem;
    color: ${({ theme }) => theme['base-text']};
    text-transform: uppercase;
    font-size: 0.75rem;
    padding: 0.375rem 0.5rem;

    svg {
      color: ${({ theme }) => theme.purple};
    }
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['base-button']};
  display: flex;
  gap: 0.25rem;
  border-radius: 6px;
  /* padding: 0.5rem; */
  color: ${({ theme }) => theme['base-title']};
  span {
    user-select: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.purple};
    padding: 0.5rem;
    background-color: transparent;
    /* aspect-ratio: 1/1; */
    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`
