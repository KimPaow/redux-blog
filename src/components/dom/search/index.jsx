import { Stack } from '@/components/dom/flex'
import Button from '@/components/dom/button'
import Input from '@/components/dom/input'

export const Search = ({ disabled, ...props }) => {

  return (
    <Stack gap={2} as="form" align="center" {...props}>
      <Input
        disabled={disabled}
        aria-disabled={disabled}
        name="search"
        placeholder="Search"
        css={{ maxWidth: '100%', height: '100%', flex: '1 1 auto', '@sm': { flex: '1 0 auto' } }}
      />
      <Button
        disabled={disabled}
        aria-disabled={disabled}
        type="submit"
        style="solid"
        css={{ height: '100%', flex: '1 1 auto', '@sm': { flex: '1 0 auto' } }}
      >
        Submit
      </Button>
    </Stack>
  )
}

export default Search