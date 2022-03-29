import { styled } from "@/theme";
import { Box } from '@/components/dom/box'

const BaseCard = styled(Box, {
  borderRadius: '$md',
  backgroundColor: '$card_bg',
  borderWidth: '1px',
  borderStyle: "solid",
  borderColor: '$card_border',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3',

  variants: {
    status: {
      error: {
        backgroundColor: '$red900',
      }
    }
  }
})

export const Card = ({ ...props }) => {
  return <BaseCard {...props} />;
};

export default Card;