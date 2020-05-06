import styled from 'styled-components'

import Box from '../Box'

export const Wrapper = styled(Box)`
  border-radius: 0;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 850px 1fr;
  grid-template-areas: 'logo menu logout';
  padding: 0 1rem;

  a {
    font-size: 1.25rem;
    display: block;
    padding: 1rem;
    position: relative;

    &.current::after {
      content: '';
      height: 3px;
      background: #8244bc;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    grid-area: menu;
  }
`

export const Title = styled.h2`
  color: #8244bc;
  grid-area: 'logo';
  font-size: 30px;
  font-weight: 700;
`
