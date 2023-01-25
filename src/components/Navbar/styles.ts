import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.72rem;
`

export const Location = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0.5rem;
  color: ${({ theme }) => theme['purple-dark']};
  background-color: ${({ theme }) => theme['purple-light']};
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const CartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  padding: 0.5rem;
  position: relative;

  color: ${({ theme }) => theme['yellow-dark']};
  background-color: ${({ theme }) => theme['yellow-light']};

  &:hover {
    background-color: ${({ theme }) => theme['yellow-light']};
  }
`

export const CartBadge = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: -0.5rem;
  left: 1.625rem;

  border-radius: 50%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme['yellow-dark']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  padding: 0.5rem;
  line-height: 0;
  font-size: 0.75rem;
`
