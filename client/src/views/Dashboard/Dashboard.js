import React from 'react'
import Menu from '../../components/Menu'
import * as S from './styles'

const Dashboard = () => {
  return (
    <S.Container>
      <S.Header />

      <S.Tasks>
        <S.Task></S.Task>
        <S.Task></S.Task>
        <S.Task></S.Task>
        <S.Task></S.Task>
        <S.Task></S.Task>
        <S.Task></S.Task>
      </S.Tasks>

      <Menu />
    </S.Container>
  )
}

export default Dashboard
