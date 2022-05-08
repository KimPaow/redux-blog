import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '@/redux/slices/userSlice'

export const useIsAuthenticated = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  return isAuthenticated
}