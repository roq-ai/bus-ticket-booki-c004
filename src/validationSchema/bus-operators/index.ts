import * as yup from 'yup';

export const busOperatorValidationSchema = yup.object().shape({
  operator_name: yup.string().required(),
  operator_address: yup.string().required(),
  operator_contact: yup.string().required(),
  bus_count: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
