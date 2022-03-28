import getResponsiveValues from '@/utils/getResponsiveValues';
import { styled } from '@/theme'

const BaseSpacer = styled('span', {
  flexGrow: 0,
  flexShrink: 0,
})

export const Spacer = ({ css, x, y, basis, grow, ...props }) => {
  const basisStyles = getResponsiveValues({ key: 'flexBasis', values: basis })
  const heightStyles = getResponsiveValues({ key: 'height', values: y })
  const weightStyles = getResponsiveValues({ key: 'width', values: x })
  const growStyles = getResponsiveValues({ key: 'flexGrow', values: grow })

  return <BaseSpacer css={{
    ...growStyles,
    ...basisStyles,
    ...heightStyles,
    ...weightStyles,
    ...css
  }} {...props} />;
};

export default Spacer;
