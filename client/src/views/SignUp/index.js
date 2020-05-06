import React from 'react'

import { Box, Button, InputText } from '../../components'
import { routes } from '../../Routes'
import useForm from '../../hooks/useForm'

import * as S from './styled'
import validate from './form-validation'

export default function SignUp() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    signUp,
    validate
  )

  async function signUp() {
    console.log(values)
  }

  return (
    <S.Wrapper>
      <Box className="flex overflow-hidden">
        <S.Quote>
          <S.Avatar>
            <img
              src="https://randomuser.me/api/portraits/men/74.jpg"
              alt="Avatar"
            />
          </S.Avatar>
          <S.Message>
            <i>Willie Long</i>
            The strength of JavaScript is that you can do anything.
          </S.Message>
        </S.Quote>
        <div className="p-4 md:p-10 relative">
          <S.Title className="mb-4">Sign up</S.Title>
          <form onSubmit={handleSubmit}>
            <InputText
              name="name"
              type="text"
              placeholder="Name"
              className="mb-4"
              errorMessage={errors.name}
              value={values.name || ''}
              onChange={handleChange}
            />
            <InputText
              name="email"
              type="email"
              placeholder="Email"
              className="mb-4"
              errorMessage={errors.email}
              value={values.email || ''}
              onChange={handleChange}
            />
            <InputText
              name="password"
              type="password"
              placeholder="Password"
              className="mb-4"
              errorMessage={errors.password}
              value={values.password || ''}
              onChange={handleChange}
            />
            <Button type="submit" color="primary" fullWidth>
              Create account
            </Button>
          </form>
          <S.BackLink to={routes.auth.signin} tabIndex={-1}>
            <S.BackIcon size="30" />
          </S.BackLink>
        </div>
      </Box>
    </S.Wrapper>
  )
}
