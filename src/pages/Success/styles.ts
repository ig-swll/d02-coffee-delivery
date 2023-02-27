import styled, { keyframes } from 'styled-components'

const bikeStartAnim = keyframes`
  from {
    opacity: 0;
    translate: -5rem;
  }
  to {
    opacity: 1;
    translate: 0;
  }
`

const bikeInfiniteAnim = keyframes`
  from {
    transform: translateY(-0.25rem);
  }
  to {
    transform: translateY(0.25rem);
  }
`

const orderInfoAnim = keyframes`
  from {
    opacity: 0;
    translate: 0 -3rem;
  }
  to {
    opacity: 1;
    translate: 0;
  }
`

export const SuccessContainer = styled.main`
  margin-top: 5rem;

  section + section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    img {
      animation: ${bikeStartAnim} 0.4s ease-in,
        ${bikeInfiniteAnim} 1.6s ease-in-out infinite alternate;
      max-width: 100%;

      @media (prefers-reduced-motion) {
        animation: none;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: 2.5rem;
    section + section {
      flex-direction: column;
    }
  }
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
  position: relative;
  width: 100%;
  animation: ${orderInfoAnim} 0.4s ease-out;
  border: 1px solid #0000;
  border-radius: 6px 44px 6px 44px;
  background: linear-gradient(
        ${({ theme }) => theme.background},
        ${({ theme }) => theme.background}
      )
      padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;

  @media (prefers-reduced-motion) {
    animation: none;
  }
`
