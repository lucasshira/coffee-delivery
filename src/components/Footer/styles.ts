import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  padding: 16px;
  position: relative;
  justify-content: center;
  align-items: center;
  font-family: 'Baloo 2';

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['base-hover']}
  }

  a {
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s, border 0.3s;
    position: relative;
    color: ${({ theme }) => theme.colors['purple']}
  }

  a::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors['purple']};
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.12em;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  a:hover::before {
    transform: scaleX(1);
  }
`