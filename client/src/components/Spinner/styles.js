import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  animation: 1s ${spin} ease infinite;
  display: inline-block;
  height: 16px;
  width: 16px;
  border: 2px solid #fff;
  border-radius: 16px;
  border-right-color: transparent;
`
