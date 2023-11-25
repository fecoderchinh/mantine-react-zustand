import { render as testingLibraryRender } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { theme } from '../src/theme'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export function render(ui: React.ReactNode) {
   return testingLibraryRender(<>{ui}</>, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
         <BrowserRouter>
            <MantineProvider theme={theme}>{children}</MantineProvider>
         </BrowserRouter>
      ),
   })
}
