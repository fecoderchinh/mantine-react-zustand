import { lazy } from 'react';

const AuthenticationForm = lazy(() => import('@/components/Authentication/Authentication'))

export const PageLogin = () => {
   return <AuthenticationForm />
}

export default PageLogin
