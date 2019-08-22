import React from 'react'
import * as S from './styles'
import schema, { initialState } from './schema'
import { Box, Button, InputText } from 'components'
import { routes } from 'Routes'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [data, setData] = React.useState(initialState)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await schema.validate({
        email: data.email.value,
        password: data.password.value
      })
    } catch ({ errors, path }) {
      setData({
        ...data,
        [path]: {
          value: data[path].value,
          errorMessage: errors[0]
        }
      })
    }
  }

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: {
        value: e.target.value,
        errorMessage: undefined
      }
    })
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
              errorMessage={data.email.errorMessage}
              value={data.email.value}
              onChange={handleChange}
            />
            <InputText
              name="password"
              type="password"
              placeholder="Password"
              className="mb-4"
              errorMessage={data.password.errorMessage}
              value={data.password.value}
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

export default SignIn
