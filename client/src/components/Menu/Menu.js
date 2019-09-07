import React from 'react'
import { FiPlus, FiHome, FiUser } from 'react-icons/fi'

import * as S from './styles'

import Button from '../Button'
import InputText from '../InputText'

export default function Menu() {
  const [open, setOpen] = React.useState(false)
  const [touched, setTouched] = React.useState(false)
  const [ripple, setRipple] = React.useState(false)

  const handleClick = () => {
    setRipple(true)

    setTimeout(() => {
      setOpen(!open)
      setTouched(true)
      setRipple(false)
    }, 300)
  }

  return (
    <S.Container open={open} touched={touched}>
      <S.Menu>
        <S.MenuLink open={open}>
          <FiHome color="#8244bc" size={25} />
        </S.MenuLink>

        <S.Toggle open={open} onClick={handleClick}>
          <S.Ripple ripple={ripple} />
          <FiPlus color="#fff" size={25} />
        </S.Toggle>

        <S.MenuLink open={open}>
          <FiUser color="#8244bc" size={25} />
        </S.MenuLink>
      </S.Menu>

      <S.Form>
        <InputText className="mb-4" placeholder="Task description" fullWidth />
        <Button fullWidth>Save</Button>
      </S.Form>
    </S.Container>
  )
}
