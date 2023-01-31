import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  > h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeeCardGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
