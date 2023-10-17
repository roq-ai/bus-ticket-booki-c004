import * as yup from 'yup';

export const businessOwnerValidationSchema = yup.object().shape({
  owner_name: yup.string().required(),
  owner_address: yup.string().required(),
  owner_contact: yup.string().required(),
  business_type: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
