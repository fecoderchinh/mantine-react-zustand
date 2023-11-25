/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-duplicate-imports */
// import { useCallback } from 'react'
import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, Paper, Group, Button, Divider, Checkbox, Anchor, Stack } from '@mantine/core'
import type { PaperProps } from '@mantine/core'
// import { notifications } from '@mantine/notifications'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'

interface AuthenticationFormProps extends PaperProps {
   type?: string
}

export const AuthenticationForm = (props: AuthenticationFormProps) => {
   const auth = useAuthStore()

   const [type, toggle] = useToggle(['login', 'register'])

   const form = useForm({
      initialValues: {
         email: '',
         name: '',
         password: '',
         terms: true,
      },

      validate: {
         email: (val: string) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
         password: (val: string) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
      },
   })

   const navigate = useNavigate()

   const handleLogin = async (_formData: { email: string; password: string }) => {
      await auth.login().then((res) => res.isAuthenticated && navigate('/welcome'))
   }

   return (
      <Paper radius='md' p='xl' withBorder {...props}>
         <Divider label='Login' labelPosition='center' my='lg' />

         <form
            onSubmit={form.onSubmit((values: { email: string; password: string }) => {
               const formData = {
                  email: values.email,
                  password: values.password,
               }
               handleLogin(formData)
            })}
         >
            <Stack>
               {type === 'register' && (
                  <TextInput
                     label='Name'
                     placeholder='Your name'
                     value={form.values.name}
                     onChange={(event: { currentTarget: { value: string } }) =>
                        form.setFieldValue('name', event.currentTarget.value)
                     }
                     radius='md'
                  />
               )}

               <TextInput
                  required
                  label='Email'
                  placeholder='hello@mantine.dev'
                  value={form.values.email}
                  onChange={(event: { currentTarget: { value: string } }) =>
                     form.setFieldValue('email', event.currentTarget.value)
                  }
                  error={form.errors.email && 'Invalid email'}
                  radius='md'
               />

               <PasswordInput
                  required
                  label='Password'
                  placeholder='Your password'
                  value={form.values.password}
                  onChange={(event: { currentTarget: { value: string } }) =>
                     form.setFieldValue('password', event.currentTarget.value)
                  }
                  error={form.errors.password && 'Password should include at least 6 characters'}
                  radius='md'
               />

               {type === 'register' && (
                  <Checkbox
                     label='I accept terms and conditions'
                     checked={form.values.terms}
                     onChange={(event: { currentTarget: { checked: boolean } }) =>
                        form.setFieldValue('terms', event.currentTarget.checked)
                     }
                  />
               )}
            </Stack>

            <Group justify='space-between' mt='xl'>
               <Anchor component='button' type='button' c='dimmed' onClick={() => toggle()} size='xs'>
                  {type === 'register' ? 'Already have an account? Login' : "Don't have an account? Register"}
               </Anchor>
               <Button type='submit' radius='xl'>
                  {upperFirst(type)}
               </Button>
            </Group>
         </form>
      </Paper>
   )
}

export default AuthenticationForm
