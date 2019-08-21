import styled from 'styled-components'
import { ifProp } from 'styled-tools'

export const Button = styled.button`
  background: #9b51e0;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  width: ${ifProp({ fullWidth: true }, '100%', '')};

  :hover {
    background: #693797;
  }

  :focus {
    background: #693797;
    outline: none;
  }
`
