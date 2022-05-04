import { Dialog as ReachDialog } from '@reach/dialog'
import { styled } from "@/theme";

export const Dialog = styled(ReachDialog, {
  maxWidth: '450px',
  margin: '20vh auto',
  borderRadius: '$md',
  color: '$text_body',
  backgroundColor: '$bg_body',
  borderWidth: '$1',
  borderStyle: "solid",
  borderColor: '$card_border',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  padding: '$4',

  '@md': {
    width: '100%',
    margin: '10vh auto',
  },
})

export default Dialog
