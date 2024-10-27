import { useAuthStore } from '@/store/auth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute: React.FC<ChildrenRouteProps> = ({ children }) => {
   const auth = useAuthStore()

   return !auth.isAuthenticated ? <Navigate to='/login' /> : <>{children}</>
}

export default ProtectedRoute
