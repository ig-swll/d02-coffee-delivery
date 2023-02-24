import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme['base-card']};
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  height: 19.375rem;
  margin: 0 auto;

  /* width: 100%; */

  border-radius: 6px 36px;
  padding: 1.2rem 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: 0 auto;
    margin-top: calc(0px - 2.5rem);
  }
`
export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  width: 100%;
  margin-top: 0.75rem;
  align-items: center;
  justify-content: center;
`

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  text-align: center;
  justify-content: flex-end;
  margin-top: 1rem;

  strong {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  small {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-label']};
  }
`

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;

  > div {
    display: flex;
    gap: 0.25rem;
  }
`

export const Price = styled.span`
  small {
    font-size: 0.875rem;
  }
  strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;
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
    padding: 0.75rem 0.5rem;
    background-color: transparent;
    /* aspect-ratio: 1/1; */
    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

export const AddToCartButton = styled.button`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['purple-dark']};
  aspect-ratio: 1/1;
  padding: 0.5rem;
  display: flex;
  place-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }
`
