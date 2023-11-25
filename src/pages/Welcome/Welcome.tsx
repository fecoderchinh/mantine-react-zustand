import { lazy } from 'react'

const ColorSchemeToggle = lazy(() => import('@/components/ColorSchemeToggle/ColorSchemeToggle'))
const Welcome = lazy(() => import('@/components/Welcome/Welcome'))

export const PageWelcome = () => {
   return (
      <>
         <Welcome />
         <ColorSchemeToggle />
      </>
   )
}

export default PageWelcome
