import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  customer_name: yup.string().required(),
  customer_address: yup.string().required(),
  customer_contact: yup.string().required(),
  customer_age: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
