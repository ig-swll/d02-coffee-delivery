import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 5rem;
`

export const Title = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 2.5rem;

  h1 {
    color: ${({ theme }) => theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  border: 1px solid;
  border-image-source: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%)
    1 100%;
`
