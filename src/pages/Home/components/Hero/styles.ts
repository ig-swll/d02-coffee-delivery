import styled from 'styled-components'
import heroBackground from '../../../../assets/Background.svg'

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 5.75rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

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
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
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

export const SellingPoints = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.5rem;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    margin: 4.125rem auto 0;
  }
`
