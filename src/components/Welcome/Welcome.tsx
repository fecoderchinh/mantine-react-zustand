import { Title, Text, Anchor } from '@mantine/core'
import classes from './Welcome.module.css'
import { useAuthStore } from '@/store/auth'
import { useNavigate } from 'react-router'
import { notifications } from '@mantine/notifications'

export const Welcome = () => {
   const authState = useAuthStore()

   const navigate = useNavigate()

   const handleLogout = async () => {
      await authState.logout().then(res => {
         if (!res.isAuthenticated) {
            notifications.show({
               title: 'Sign out success!',
               message: 'We will miss you!',
               color: 'green',
            })
            navigate('/')
         }
      })
   }
   return (
      <>
         <Title className={classes.title} ta='center' mt={100}>
            Welcome to{' '}
            <Text inherit variant='gradient' component='span' gradient={{ from: 'pink', to: 'yellow' }}>
               Mantine
            </Text>
         </Title>
         <Text color='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
            This starter Vite project includes a minimal setup, if you want to learn more on Mantine + Vite integration
            follow{' '}
            <Anchor href='https://mantine.dev/guides/vite/' size='lg'>
               this guide
            </Anchor>
            . To get started edit pages/Home.page.tsx file.
         </Text>
         <button onClick={handleLogout}>Log out</button>
      </>
   )
}

export default Welcome
