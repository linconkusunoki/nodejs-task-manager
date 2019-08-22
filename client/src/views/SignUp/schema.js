import * as Yup from 'yup'

export const initialState = {
  name: {
    value: '',
    errorMessage: undefined
  },
  email: {
    value: '',
    errorMessage: undefined
  },
  password: {
    value: '',
    errorMessage: undefined
  }
}

export default Yup.object().shape({
  name: Yup.string()
    .min(4)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required()
})
