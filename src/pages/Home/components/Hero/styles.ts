import styled from 'styled-components'
import heroBackground from '../../../../assets/Background.svg'

export const HeroContainer = styled.section`
  width: 100%;
  background: url(${heroBackground});
  background-color: ${({ theme }) => theme.background};
  background-blend-mode: screen;
  padding: 5.75rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  > img {
    max-width: 476px;
  }
`

export const MainText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const SellingPointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const SellingPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
