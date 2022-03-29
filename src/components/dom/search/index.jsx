import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@/features/search/searchSlice'
import { Stack } from '@/components/dom/flex'
import Button from '@/components/dom/button'
import Input from '@/components/dom/input'

export const Search = ({ disabled, ...props }) => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearchQuery(e?.target?.elements?.search?.value))
  }

  return (
    <Stack gap={2} as="form" onSubmit={handleSubmit} align="center" {...props}>
      <Input
        disabled={disabled}
        aria-disabled={disabled}
        name="search"
        placeholder="Search"
        css={{ height: '100%', flexBasis: '100%', '@sm': { flexBasis: 'auto' } }}
      />
      <Button
        disabled={disabled}
        aria-disabled={disabled}
        type="submit"
        style="solid"
        css={{ height: '100%' }}
      >
        Submit
      </Button>
    </Stack>
  )
}

export default Search