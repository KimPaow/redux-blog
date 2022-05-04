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
      <Stack column>
        <Text label htmlFor="username">Username</Text>
        <Input id="username" />
      </Stack>
      <Stack column>
        <Text label htmlFor="password">Password</Text>
        <Input id="password" type="password" />
      </Stack>
      <Button style="solid" type="submit" css={{ minHeight: '40px', marginTop: '$3' }}>{buttonText}</Button>
    </Form>
  )
}

export default RegisterForm
