import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { selectUserData } from '@/redux/slices/userSlice'
import { useIsAuthenticated } from '@/utils/hooks/useIsAuthenticated'
import { useEffect, useState } from 'react'

export const useProtectedPage = (allowedRoles) => {
  const isAuthenticated = useIsAuthenticated()
  const userData = useSelector(selectUserData)
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false)

  useEffect(() => {
    if (isAuthenticated && allowedRoles.includes(userData?.role)) {
      setIsAllowed(true)
    } else {
      router.replace("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, userData])

  return isAllowed
}

export default useProtectedPage
