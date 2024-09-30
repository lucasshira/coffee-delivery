import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
`

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex; 
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    font-family: 'Baloo 2';
    font-size: 2.5rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  > span {
    font-size: 1.4rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 50%;
    }
  }
`

export const CoffeeList = styled.div`

`