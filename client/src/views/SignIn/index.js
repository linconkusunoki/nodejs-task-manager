import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Button, InputText } from '../../components'
import { routes } from '../../Routes'
import useForm from '../../hooks/useForm'

import * as S from './styled'
import validate from './form-validation'

export default function SignIn() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    signIn,
    validate
  )

  async function signIn() {
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
        <div className="p-4 md:p-10">
          <S.Title className="mb-4">Sign in</S.Title>
          <form onSubmit={handleSubmit}>
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
              Sign in
            </Button>
          </form>
          <S.Divider>Don't have an account?</S.Divider>
          <Link to={routes.auth.signup} tabIndex={-1}>
            <Button fullWidth>Create account</Button>
          </Link>
        </div>
      </Box>
    </S.Wrapper>
  )
}
