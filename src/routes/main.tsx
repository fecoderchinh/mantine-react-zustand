import { useTranslation } from 'react-i18next';
import BoxLayout from '@/layouts/BoxLayout';
import { lazy } from 'react';

const PageHome = lazy(() => import('@/pages/Home/Home'));
const PageWelcome = lazy(() => import('@/pages/Welcome/Welcome'));
const PageLogin = lazy(() => import('@/pages/Auth/Login/Login'));
const PageNotFound = lazy(() => import('@/pages/NotFound/NotFound'));
const ProtectedRoute = lazy(() => import('@/components/ProtectedRoute/ProtectedRoute'));

function useTranslatedRoutes() {
   const { t } = useTranslation();

   return [
      {
         path: `/`,
         element: <PageHome />,
      },
      {
         path: `/${t('routes.welcome')}`,
         element: (
            <ProtectedRoute>
               <PageWelcome />
            </ProtectedRoute>
         ),
      },
      {
         path: `/${t('routes.login')}`,
         element: <BoxLayout><PageLogin /></BoxLayout>,
      },
      {
         path: `*`,
         element: <BoxLayout><PageNotFound /></BoxLayout>,
      },
   ];
}

export default useTranslatedRoutes;
