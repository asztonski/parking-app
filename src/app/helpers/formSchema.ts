import * as yup from 'yup'

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Phone number is too short')
      .required('Phone number is required'),
    model: yup.string().required('Model is required'),
    plates: yup.string().required('Plates are required'),
  });

export default validationSchema