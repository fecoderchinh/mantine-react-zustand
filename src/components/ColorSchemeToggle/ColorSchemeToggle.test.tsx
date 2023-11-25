import { render } from '@tests'
import { ColorSchemeToggle } from './ColorSchemeToggle'

describe('ColorSchemeToggle', () => {
   it('should render the ColorSchemeToggle', () => {
      const { container } = render(<ColorSchemeToggle />)
      expect(container).toMatchSnapshot()
   })
})
