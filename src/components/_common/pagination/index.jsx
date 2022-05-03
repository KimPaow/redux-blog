import Grid from '@/components/_common/grid'
import Stack from "@/components/_common/flex/stack"
import { Spacer } from '@/components/_common/flex'
import { Link } from '@/components/_common/links'
import Box from '@/components/_common/box'
import { styled } from '@/theme'

const ScrollCover = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '$4',
  zIndex: 100,

  variants: {
    side: {
      left: {
        left: 0,
        linearGradient: 'to right, $colors$bg_body, rgba(0, 0, 0, 0)',
      },
      right: {
        right: 0,
        linearGradient: 'to left, $colors$bg_body, rgba(0, 0, 0, 0)',
      }
    }
  }
})

const PaginationWrapper = styled(Grid.Row, {
  marginTop: '$4',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '100vw',

  '@sm': { marginTop: '$5' }
})

/**
 * 
 * @param {number} currentPage Current page number
 * @param {boolean} disablePrev Disables the prev-button if true
 * @param {boolean} disableNext Disables the next-button if true
 * 
 * Usage:
 * ```jsx
 * <PaginationBase>
 *   <Link pagination>1</Link>
 * </PaginationBase>
 * ```
 */
export const Pagination = ({ children, disablePrev, disableNext, currentPage, ...props }) => {
  return <PaginationWrapper {...props}>
    <Link pagination disabled={disablePrev} to={`/?page=${currentPage - 1}`}>{"←"}</Link>
    <Spacer basis={3} />
    <Box css={{ position: 'relative', flexGrow: 0, flexShrink: 1, maxWidth: '60vw', '@md': { maxWidth: 'none' } }}>
      <ScrollCover side="left" />
      <ScrollCover side="right" />
      <Stack gap={1} css={{
        overflowX: 'scroll',
        paddingY: '$2',
        position: 'relative',
        paddingX: '$4',
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',

        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {children}
      </Stack>
    </Box>
    <Spacer basis={3} />
    <Link pagination disabled={disableNext} to={`/?page=${currentPage + 1}`}>{"→"}</Link>
  </PaginationWrapper>
}

export default Pagination
