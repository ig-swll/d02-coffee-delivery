import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  > h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeeCardGrid = styled.div`
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: repeat(4, minmax(min(256px, 100%), 1fr));
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
