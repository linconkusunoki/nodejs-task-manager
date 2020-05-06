import React from 'react'
import * as S from './styles'

const InputText = ({ className, errorMessage, ...rest }) => (
  <S.Wrapper className={className}>
    <S.InputText {...rest} errorMessage={errorMessage} />
    {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
  </S.Wrapper>
)

export default InputText
