import * as yup from 'yup';

const loginSchema = yup.object().shape({
  password: yup.string().min(6).max(12).required(),
  email: yup.string().email().required(),
})

export default loginSchema;