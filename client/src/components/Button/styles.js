import styled from 'styled-components'
import { ifProp } from 'styled-tools'

export const Button = styled.button`
  background: ${ifProp({ color: 'primary' }, '#9b51e0', '')};
  border-radius: 100px;
  border: 2px solid #9b51e0;
  color: ${ifProp({ color: 'primary' }, '#fff', '#9b51e0')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  width: ${ifProp({ fullWidth: true }, '100%', '')};
  transition: all 230ms ease;

  :hover,
  :focus {
    background: #693797;
    color: #fff;
    border-color: #693797;
    outline: none;
  }
`
