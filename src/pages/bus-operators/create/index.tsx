import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { busOperatorValidationSchema } from 'validationSchema/bus-operators';
import { UserInterface } from 'interfaces/user';
import { BusOperatorInterface } from 'interfaces/bus-operator';

function BusOperatorCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: BusOperatorInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.bus_operator.create({ data: values as RoqTypes.bus_operator });
      resetForm();
      router.push('/bus-operators');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<BusOperatorInterface>({
    initialValues: {
      operator_name: '',
      operator_address: '',
      operator_contact: '',
      bus_count: 0,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: busOperatorValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Bus Operators',
              link: '/bus-operators',
            },
            {
              label: 'Create Bus Operator',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Bus Operator
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.operator_name}
            label={'Operator Name'}
            props={{
              name: 'operator_name',
              placeholder: 'Operator Name',
              value: formik.values?.operator_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.operator_address}
            label={'Operator Address'}
            props={{
              name: 'operator_address',
              placeholder: 'Operator Address',
              value: formik.values?.operator_address,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.operator_contact}
            label={'Operator Contact'}
            props={{
              name: 'operator_contact',
              placeholder: 'Operator Contact',
              value: formik.values?.operator_contact,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Bus Count"
            formControlProps={{
              id: 'bus_count',
              isInvalid: !!formik.errors?.bus_count,
            }}
            name="bus_count"
            error={formik.errors?.bus_count}
            value={formik.values?.bus_count}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('bus_count', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/bus-operators')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'bus_operator',
    operation: AccessOperationEnum.CREATE,
  }),
)(BusOperatorCreatePage);
