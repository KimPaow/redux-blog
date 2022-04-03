import { styled } from '@/theme/stitches.config'
import { forwardRef } from 'react';
import { getResponsiveValues } from '@/utils/getResponsiveValues'

const BaseStack = styled('div', {
  display: 'flex',

  variants: {
    width: {
      content: {
        maxWidth: '$content'
      }
    },
    row: {
      true: {
        flexDirection: 'row',
      },
    },
    column: {
      true: {
        flexDirection: 'column',
      },
    },
  }
})

export const Stack = forwardRef(({ gap = 0, basis, align, justify, css, ...props }, ref) => {
  const responsiveValues = getResponsiveValues({ key: 'gap', values: gap })

  return <BaseStack css={{
    gap: `$${gap}`,
    alignItems: align,
    justifyContent: justify,
    flexBasis: basis,
    ...responsiveValues,
    ...css
  }} {...props} ref={ref} />;
});

Stack.displayName = "Stack"

export default Stack;
