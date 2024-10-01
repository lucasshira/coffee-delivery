import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 0 20px 20px;
  max-width: 256px;

  display: flex;
  flex-direction: column;
  text-align: center;

  border-radius: 6px 36px;
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    color: ${({ theme }) => theme.colors['yellow-light']};
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
    font-family: 'Roboto', sans-serif;
    padding: 4px 8px;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`

export const Title = styled.h3`
  margin-top: 1rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${({ theme }) => theme.colors['base-label']};
`

export const Control = styled.div`
  
`

export const Price = styled.div`

`

export const Order = styled.div`

`