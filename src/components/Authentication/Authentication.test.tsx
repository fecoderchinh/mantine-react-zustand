import { render, userEvent, waitFor } from '@tests'
import { AuthenticationForm } from './Authentication'
import { useAuthStore } from '@/store/auth'
import * as router from 'react-router-dom'
import { notifications } from '@mantine/notifications'

beforeEach(() => {
   expect(router)
})

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedNavigate
}))

jest.mock('@mantine/notifications', () => ({
   ...jest.requireActual('@mantine/notifications'),
   notifications: {
      show: jest.fn(),
   },
}))

describe('AuthenticationForm component', () => {
   it('renders "Login" divider when type is "login"', () => {
      render(<AuthenticationForm />)
   })

   it('toggles between login and register states', async () => {
      const { queryByText, getByText } = render(<AuthenticationForm />);
      const switchToRegister = queryByText('Don\'t have an account? Register');
      expect(switchToRegister).toBeInTheDocument();

      if (switchToRegister) {
         await userEvent.click(switchToRegister);
         expect(getByText('Already have an account? Login')).toBeInTheDocument();
      }

      const switchToLogin = queryByText('Already have an account? Login');
      expect(switchToLogin).toBeInTheDocument();

      if (switchToLogin) {
         await userEvent.click(switchToLogin);
         expect(getByText('Don\'t have an account? Register')).toBeInTheDocument();
      }
   })

   it('handles login submission', async () => {
      const loginMock = jest.fn().mockResolvedValue({ isAuthenticated: true });
      useAuthStore.setState({login: loginMock, isAuthenticated: true});

      const { getByPlaceholderText } = render(<AuthenticationForm />);

      await userEvent.type(getByPlaceholderText('hello@mantine.dev'), 'test@example.com');
      await userEvent.type(getByPlaceholderText('Your password'), 'password');

      const loginButton = document.querySelector('.mantine-Button-label');
      expect(loginButton).toBeInTheDocument();

      if (loginButton) {
         await userEvent.click(loginButton);
      }

      await waitFor(() => {
         expect(loginMock).toHaveBeenCalledWith('test@example.com', 'password');
      });
   })

   it('navigates to welcome page after successful login', async () => {
      const loginMock = jest.fn().mockResolvedValue({ isAuthenticated: true });
      useAuthStore.setState({login: loginMock, isAuthenticated: true});

      const { getByPlaceholderText } = render(<AuthenticationForm />);

      await userEvent.type(getByPlaceholderText('hello@mantine.dev'), 'test@example.com');
      await userEvent.type(getByPlaceholderText('Your password'), 'password');

      const loginButton = document.querySelector('.mantine-Button-label');
      expect(loginButton).toBeInTheDocument();

      if (loginButton) {
         await userEvent.click(loginButton);
      }

      await waitFor(() => {
         expect(mockedNavigate).toHaveBeenCalledWith('/welcome');
      });
   })

   it('displays error notification on login failure', async () => {
      const loginMock = jest.fn().mockResolvedValue({ isAuthenticated: false, error: {message: 'Invalid credentials'} });
      useAuthStore.setState({login: loginMock, isAuthenticated: false });

      const { getByPlaceholderText } = render(<AuthenticationForm />);

      await userEvent.type(getByPlaceholderText('hello@mantine.dev'), 'test@example.com');
      await userEvent.type(getByPlaceholderText('Your password'), 'password');

      const loginButton = document.querySelector('.mantine-Button-label');
      expect(loginButton).toBeInTheDocument();

      if (loginButton) {
         await userEvent.click(loginButton);
      }

      await waitFor(() => {
         expect(notifications.show).toHaveBeenCalledWith({
            color: 'red',
            message: 'Invalid credentials',
            title: 'Error occurred'
         });
      });
   })
})
