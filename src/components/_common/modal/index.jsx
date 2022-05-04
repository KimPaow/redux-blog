import { useState, cloneElement } from 'react'
import VisuallyHidden from '@reach/visually-hidden'

import { Dialog } from '@/components/_common/dialog'
import { Button } from '@/components/_common/button'
import { Box } from '@/components/_common/box'
import { Text } from '@/components/_common/text'

export const Modal = ({ button, label, title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {cloneElement(button, { onClick: () => setIsOpen(true) })}
      <Dialog aria-label={label} isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <Box css={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '$3' }}>
          <Text h5 as="h3" align="center" css={{ marginRight: 'auto' }}>Login</Text>
          <Button style="solid" onClick={() => setIsOpen(false)}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </Button>
        </Box>
        {children}
      </Dialog>
    </>
  )
}

export default Modal
