import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  padding: 8px;
  border-radius: 6px;
  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};
    transition: all 200ms;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`