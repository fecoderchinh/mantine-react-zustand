import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuthStore } from '@/store/auth'

interface ProtectedRouteProps {
   children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
   const auth = useAuthStore()

   return !auth.isAuthenticated ? <Navigate to='/login' /> : <>{children}</>
}

export default ProtectedRoute
