import React from 'react'
import * as S from './styles'
import schema, { initialState } from './schema'
import { Box, Button, InputText } from 'components'

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
      <Box className="p-12">
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
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </S.Wrapper>
  )
}

export default SignIn
