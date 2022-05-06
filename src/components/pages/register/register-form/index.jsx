import { Stack } from "@/components/_common/flex"
import { Button } from "@/components/_common/button"
import { Text } from "@/components/_common/text"
import { Input } from "@/components/_common/forms/input"
import { Form } from "@/components/_common/forms/form"

/**
 * A form containing input fields for username and password
 * @param {function} onSubmit Callback that receives a username and password value 
 */
export const RegisterForm = ({ onSubmit, buttonText, ...props }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <Form onSubmit={handleSubmit} {...props}>
      <Stack gap={3} justify="stretch">
        <Stack gap={1} column css={{ flex: 1 }}>
          <Text label htmlFor="firstName">First Name</Text>
          <Input id="firstName" placeholder="First Name" />
        </Stack>
        <Stack gap={1} column css={{ flex: 1 }}>
          <Text label htmlFor="lastName">Last Name</Text>
          <Input id="lastName" placeholder="Last Name" />
        </Stack></Stack>
      <Stack gap={1} column>
        <Text label htmlFor="email">Email address</Text>
        <Input id="email" placeholder="Email address" />
      </Stack>
      <Stack gap={1} column>
        <Text label htmlFor="password">Password</Text>
        <Input id="password" placeholder="Password" type="password" />
      </Stack>
      <Button style="solid" type="submit" css={{ minHeight: '46px', marginTop: '$3' }}>{buttonText}</Button>
    </Form>
  )
}

export default RegisterForm
