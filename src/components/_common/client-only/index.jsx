import { useState, useEffect } from 'react'
import Box from '@/components/_common/box'

/**
 * Helper component that only renders children on the client-side.
 * Important because if the SSR page differs from the client-side you will experience
 * element mismatching. Use whenever there are elements that might render differently
 * on the server vs in the client.
 */
export const ClientOnly = ({ children, ...rest }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <Box {...rest}>{children}</Box>
}

export default ClientOnly
