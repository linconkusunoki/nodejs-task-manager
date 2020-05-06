import React from 'react'
import { NavLink } from 'react-router-dom'

import * as S from './styles'

export default function Header() {
  return (
    <S.Wrapper>
      <S.Title>Task Manager</S.Title>
      <ul>
        <li>
          <NavLink to="/" activeClassName="current">
            My Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="current">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="current">
            Settings
          </NavLink>
        </li>
      </ul>
    </S.Wrapper>
  )
}
