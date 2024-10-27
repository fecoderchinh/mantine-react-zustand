import { getResponseError } from '@/helpers/transformErrorMessage'
import { useAuthStore } from '@/store/auth'
import {
   Anchor,
   Button,
   Checkbox,
   Container,
   Group,
   Paper,
   PasswordInput,
   Stack,
   Text,
   TextInput,
   Title
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { upperFirst, useToggle } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { useNavigate } from 'react-router-dom'

export const AuthenticationForm = () => {
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
      await auth.login(_formData.email, _formData.password).then((res) => {
         if (res?.isAuthenticated) {
            notifications.show({
               title: 'Success',
               message: 'Login successfully!',
               color: 'green',
            })
            navigate('/welcome')
         } else {
            notifications.show({
               title: 'Error occurred',
               message: getResponseError(res?.error),
               color: 'red',
            })
         }
      })
   }

   return (
      <Container size={420} my={40}>
         <Title ta="center" c="white">
            Login
         </Title>
         <Text c="white" size="sm" ta="center" mt={5}>
            Do not have an account yet?{' '}
            <Anchor size="sm" component="button" c="white">
               Create account
            </Anchor>
         </Text>

         <Paper withBorder shadow="md" p={30} mt={30} radius="md">

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
      </Container>
   )
}

export default AuthenticationForm
