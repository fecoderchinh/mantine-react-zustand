import i18n from '@/i18n'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { render as testingLibraryRender } from '@testing-library/react'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { theme } from '../src/theme'

export function render(ui: React.ReactNode) {
   return testingLibraryRender(<>{ui}</>, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
         <BrowserRouter>
            <MantineProvider theme={theme}>
               <I18nextProvider i18n={i18n}>
                  <Notifications />
                  {children}
               </I18nextProvider>
            </MantineProvider>
         </BrowserRouter>
      ),
   })
}
