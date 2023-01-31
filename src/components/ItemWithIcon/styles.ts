import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export type IconBgColor = 'yellow' | 'yellow-dark' | 'base-text' | 'purple'

export const IconContainer = styled.span<{ bgColor: IconBgColor }>`
  display: inline-flex;
  place-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme, bgColor }) => theme[bgColor]};
`
