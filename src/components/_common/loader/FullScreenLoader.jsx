import { InfinitySpin } from 'react-loader-spinner'

import Box from '@/components/_common/box'
import { styled } from '@/theme'

const LoaderWrapper = styled(Box, {
  height: '95vh',
})

const LoaderInnerWrapper = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

export const FullScreenLoader = ({ color, ...props }) => {
  return (
    <LoaderWrapper {...props}>
      <LoaderInnerWrapper>
        <InfinitySpin color={color || "purple"} />
      </LoaderInnerWrapper>
    </LoaderWrapper>
  )
}

export default FullScreenLoader
