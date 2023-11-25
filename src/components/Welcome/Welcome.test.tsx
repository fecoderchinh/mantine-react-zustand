import { render } from '@tests'
import { Welcome } from './Welcome'

describe('Welcome component', () => {
   it('has correct Vite guide link', () => {
      const { container } = render(<Welcome />)
      expect(container).toMatchSnapshot()
   })
})
