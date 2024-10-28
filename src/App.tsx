import '@/i18n'
import '@/index.css'
import useTranslatedRoutes from '@/routes/main'
import { theme } from '@/theme'
import { LoadingOverlay, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import React, { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

export const App = () => {
   const routes = useTranslatedRoutes();
   const element = useRoutes(routes)

   return (
      <MantineProvider theme={theme}>
         <React.StrictMode>
            <Suspense
               fallback={<LoadingOverlay visible={true} zIndex={1000} overlayProps={{ radius: 'sm', blur: 1 }} />}
            >
               <Notifications />

               {element}
            </Suspense>
         </React.StrictMode>
      </MantineProvider>
   )
}

export default () => (
   <BrowserRouter>
      <App />
   </BrowserRouter>
)
