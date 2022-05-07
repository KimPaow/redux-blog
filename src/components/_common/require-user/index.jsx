import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import FullScreenLoader from '@/components/_common/loader/FullScreenLoader';
import { userApi } from '@/redux/api/userApi';

const RequireUser = ({ allowedRoles }) => {
  const [cookies] = useCookies(['logged_in']);
  const logged_in = cookies.logged_in;

  const { data: user } = userApi.endpoints.getMe.useQuery(null, {
    skip: !logged_in,
  });

  const location = useLocation();

  if (logged_in && !user) {
    return <FullScreenLoader />;
  }

  return logged_in && allowedRoles.includes(user?.role) ? (
    <Outlet />
  ) : logged_in && user ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireUser;

