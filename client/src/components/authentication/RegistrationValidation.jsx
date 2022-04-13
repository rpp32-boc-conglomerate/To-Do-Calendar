import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().min(6).max(12).required(),
  email: yup.string().email().required(),
})

export default registrationSchema;