import { styled } from "@/theme/stitches.config";
import { Box } from '@/components/_common/box'

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
    style: {
      solid: {
        backgroundColor: '$bg_body',
        backdropFilter: 'none'
      }
    },
    status: {
      error: {
        backgroundColor: '$status_error_bg',
        color: '$status_error_text'
      },
      success: {
        backgroundColor: '$status_success_bg',
        color: '$status_success_text'
      }
    }
  }
})

export const Card = ({ ...props }) => {
  return <BaseCard {...props} />;
};

export default Card;