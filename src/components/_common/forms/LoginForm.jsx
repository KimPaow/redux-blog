import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Stack } from "@/components/_common/flex"
import { Button } from "@/components/_common/button"
import { Text } from "@/components/_common/text"
import { Input } from "@/components/_common/forms/input"
import { Form } from "@/components/_common/forms/form"

const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
}).required();

/**
 * A form containing input fields for username and password
 * @param {function} onSubmit Callback that receives a username and password value 
 */
export const LoginForm = ({ onSubmit, buttonText, ...props }) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data))} {...props}>
      <Stack column gap={1}>
        <Text label htmlFor="email">Email</Text>
        <Input id="email" placeholder="Email address" autoComplete="email" {...register("email")} />
        <Text body status="error">{errors.email?.message}</Text>
      </Stack>
      <Stack column gap={1}>
        <Text label htmlFor="password">Password</Text>
        <Input id="password" placeholder="Password" type="password" autoComplete="current-password" {...register("password")} />
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

export default LoginForm
