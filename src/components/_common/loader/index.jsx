import { InfinitySpin } from 'react-loader-spinner'
import Box from '../box'

export const Loader = ({ color, ...props }) => {
  return (
    <Box css={{ marginX: 'auto' }} {...props}><InfinitySpin color={color || "purple"} /></Box>
  )
}

export default Loader