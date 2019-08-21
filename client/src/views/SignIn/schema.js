import * as Yup from 'yup'

export const initialState = {
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
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required()
})
