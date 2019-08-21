import React from 'react'
import * as S from './styles'

const Box = props => <S.Wrapper {...props}>{props.children}</S.Wrapper>

export default Box
