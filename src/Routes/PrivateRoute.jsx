
import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Provider/AuthContext'
import LoadingSpinner from '../pages/Shared/Loading/LoadingSpinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={{from: location}} replace='true' />
}

// PrivateRoute.propTypes = {
//   children: PropTypes.element,
// }

export default PrivateRoute;