import { useAuthStore } from '@/store/auth'

export const PageHome = () => {
   const user = useAuthStore()

   const handleLogout = () => {
      user.logout()
   }

   return (
      <>
         {'Hello world!'}
         <button onClick={handleLogout}>Log out</button>
      </>
   )
}

export default PageHome
