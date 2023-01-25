import styled from 'styled-components'
import heroBackground from '../../../../assets/Background.svg'

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 5.75rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  > img {
    max-width: 476px;
    flex-shrink: 1;
    flex-grow: 0;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100%;
    z-index: -1;

    background-image: linear-gradient(
        0deg,
        rgba(250, 250, 250, 1) 0%,
        rgba(250, 250, 250, 0) 20%,
        rgba(250, 250, 250, 0) 80%,
        rgba(250, 250, 250, 1) 100%
      ),
      url(${heroBackground});
    background-position: center;
    background-repeat: repeat-x;
    background-size: cover;
  }
`

export const MainText = styled.div`
  flex-grow: 1;
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
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(min(1fr, 100%), 1.5fr));
  width: 100%;
  gap: 1.25rem 2.5rem;
`

export const SellingPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    place-content: center;
    padding: 0.5rem;
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
    background-color: purple;
  }
`
