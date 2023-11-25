import { render } from '@tests'
import { AuthenticationForm } from './Authentication'

describe('AuthenticationForm component', () => {
   it('renders "Login" divider when type is "login"', () => {
      render(<AuthenticationForm />)
      // expect(getByRole('divider', { name: 'Login' })).toBeInTheDocument()
   })

   // it('renders "Register" divider when type is "register"', () => {
   //   const { getByRole } = render(<AuthenticationForm type='register' />)
   //   expect(getByRole('divider', { name: 'Register' })).toBeInTheDocument()
   // })

   // it('renders "Name" input when type is "register"', () => {
   //   const { getByLabelText } = render(<AuthenticationForm type='register' />)
   //   expect(getByLabelText('Name')).toBeInTheDocument()
   // })

   // it('does not render "Name" input when type is "login"', () => {
   //   const { queryByLabelText } = render(<AuthenticationForm />)
   //   expect(queryByLabelText('Name')).toBeNull()
   // })

   // it('renders "Email" input', () => {
   //   const { getByLabelText } = render(<AuthenticationForm />)
   //   expect(getByLabelText('Email')).toBeInTheDocument()
   // })

   // it('renders "Password" input', () => {
   //   const { getByLabelText } = render(<AuthenticationForm />)
   //   expect(getByLabelText('Password')).toBeInTheDocument()
   // })

   // it('renders "Terms and Conditions" checkbox when type is "register"', () => {
   //   const { getByLabelText } = render(<AuthenticationForm type='register' />)
   //   expect(getByLabelText('I accept terms and conditions', {exact: false})).toBeInTheDocument()
   // })

   // it('does not render "Terms and Conditions" checkbox when type is "login"', () => {
   //   const { queryByLabelText } = render(<AuthenticationForm />)
   //   expect(queryByLabelText('I accept terms and conditions')).toBeNull()
   // })

   // it('renders "Login" button when type is "register"', () => {
   //   const { getByRole } = render(<AuthenticationForm type='register' />)
   //   expect(getByRole('button', { name: 'Login' })).toBeInTheDocument()
   // })
})
