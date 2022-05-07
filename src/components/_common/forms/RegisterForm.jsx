import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Stack } from "@/components/_common/flex"
import { Button } from "@/components/_common/button"
import { Text } from "@/components/_common/text"
import { Input } from "@/components/_common/forms/input"
import { Form } from "@/components/_common/forms/form"

const schema = yup.object({
  firstName: yup.string().matches(/[a-zA-Z]/, 'First name can only contain Latin letters.').required('First name is required'),
  lastName: yup.string().matches(/[a-zA-Z]/, 'Last name can only contain Latin letters.').required('Last name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Password is required'),
}).required();

/**
 * A form containing input fields for username and password
 * @param {function} onSubmit Callback that receives a username and password value 
 */
export const RegisterForm = ({ onSubmit, buttonText, ...props }) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data))} {...props}>
      <Stack gap={3} justify="stretch">
        <Stack gap={1} column css={{ flex: 1 }}>
          <Text label htmlFor="firstName">First Name</Text>
          <Input id="firstName" placeholder="First Name" autoComplete="given-name" {...register("firstName")} />
          <Text body status="error">{errors.firstName?.message}</Text>
        </Stack>
        <Stack gap={1} column css={{ flex: 1 }}>
          <Text label htmlFor="lastName">Last Name</Text>
          <Input id="lastName" placeholder="Last Name" autoComplete="family-name" {...register("lastName")} />
          <Text body status="error">{errors.lastName?.message}</Text>
        </Stack></Stack>
      <Stack gap={1} column>
        <Text label htmlFor="email">Email address</Text>
        <Input id="email" placeholder="Email address" autoComplete="email" {...register("email")} />
        <Text body status="error">{errors.email?.message}</Text>
      </Stack>
      <Stack gap={1} column>
        <Text label htmlFor="password">Password</Text>
        <Input id="password" placeholder="Password" type="password" autoComplete="new-password" {...register("password")} />
        <Text body status="error">{errors.password?.message}</Text>
      </Stack>
      <Button
        disabled={Object.keys(errors).length > 0}
        style="solid"
        type="submit"
        css={{ minHeight: '46px', marginTop: '$3' }}
      >
        {buttonText}
      </Button>
    </Form>
  )
}

export default RegisterForm
