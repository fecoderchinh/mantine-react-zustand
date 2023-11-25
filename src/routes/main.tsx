import { lazy } from 'react'

const PageHome = lazy(() => import('@/pages/Home/Home'))
const PageWelcome = lazy(() => import('@/pages/Welcome/Welcome'))
const PageLogin = lazy(() => import('@/pages/Auth/Login/Login'))
const PageNotFound = lazy(() => import('@/pages/NotFound/NotFound'))
const ProtectedRoute = lazy(() => import('@/components/ProtectedRoute/ProtectedRoute'))

const mainRoutes = [
   {
      path: '/',
      element: <PageHome />,
   },
   {
      path: '/welcome',
      element: (
         <ProtectedRoute>
            <PageWelcome />
         </ProtectedRoute>
      ),
   },
   {
      path: '/login',
      element: <PageLogin />,
   },
   {
      path: '/*',
      element: <PageNotFound />,
   },
]

export default mainRoutes
