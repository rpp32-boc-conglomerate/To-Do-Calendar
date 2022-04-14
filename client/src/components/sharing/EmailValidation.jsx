import * as yup from 'yup';

const emailSchema = yup.object().shape({
  email: yup.string().email().required(),
})

export default emailSchema;