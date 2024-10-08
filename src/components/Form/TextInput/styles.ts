import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['base-input']};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.colors['base-button']};
  }

  input {
    color: ${({ theme }) => theme.colors['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  span {
    color: ${({ theme }) => theme.colors['base-label']};
    padding-right: 12px;
    font-size: 1.2rem;
    font-style: italic;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ErrorMessage = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: red;
`

