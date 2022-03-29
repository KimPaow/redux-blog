import { InfinitySpin } from 'react-loader-spinner'
import Box from '../box'

export const Loader = (props) => {
  return (
    <Box css={{ marginX: 'auto' }}><InfinitySpin color="purple" {...props} /></Box>
  )
}

export default Loader