import Footer from '~/components/molecules/common/Footer'
import { render } from '~/utils/testing'

describe('Footer', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Footer title="title" subtitle="title"/>)
    expect(getByTestId('title')).toBeOnTheScreen()
    expect(getByTestId('subtitle')).toBeOnTheScreen()
  })
})
