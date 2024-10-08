import styled from 'styled-components'

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;

  &:last-child {
    padding: 26px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`