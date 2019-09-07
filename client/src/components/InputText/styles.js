import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

export const Wrapper = styled.div`
  position: relative;
`

export const InputText = styled.input`
  border: 1px solid #cdd5de;
  border-radius: 100px;
  padding: 0.5rem 1.5rem;
  outline: none;
  width: ${ifProp({ fullWidth: true }, '100%', '')};

  ${ifProp(
    'errorMessage',
    css`
      border-color: #f56565;
      box-shadow: 0 0 0 1px #f56565;
    `
  )}

  :focus {
    border-color: #9b51e0;
    box-shadow: 0 0 0 1px #9b51e0;
  }
`

export const ErrorMessage = styled.div`
  color: #f56565;
  font-size: 0.75rem;
  padding-left: 1.5rem;
`
