import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import { LoadingOverlay, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { theme } from '@/theme'
import '@/index.css'
import React, { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import mainRoutes from '@/routes/main'
import '@/i18n';

export const App = () => {
   const element = useRoutes(mainRoutes)

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
