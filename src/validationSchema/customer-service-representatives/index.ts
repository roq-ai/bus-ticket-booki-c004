import * as yup from 'yup';

export const customerServiceRepresentativeValidationSchema = yup.object().shape({
  representative_name: yup.string().required(),
  representative_address: yup.string().required(),
  representative_contact: yup.string().required(),
  representative_age: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
