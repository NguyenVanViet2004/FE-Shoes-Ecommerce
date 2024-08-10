import { AntDesign } from '@expo/vector-icons'

import Header from '~/components/molecules/common/Header'
import { render } from '~/utils/testing'

describe('Header', () => {
  it('renders correctly without left icon, right icon and back icon', () => {
    const { getByTestId } = render(<Header title="title" subtitle="title" />)
    expect(getByTestId('title')).toBeOnTheScreen()
    expect(getByTestId('subtitle')).toBeOnTheScreen()
  })

  it('renders correctly with left icon and right icon', () => {
    const { getByTestId } = render(
      <Header title="title" subtitle="title"
        leftIcon={<AntDesign name="left" size={18} color="black" />}
        rightIcon={<AntDesign name="right" size={18} color="black" />} />)
    expect(getByTestId('title')).toBeOnTheScreen()
    expect(getByTestId('subtitle')).toBeOnTheScreen()
    expect(getByTestId('left-icon')).toBeOnTheScreen()
    expect(getByTestId('right-icon')).toBeOnTheScreen()
  })

  it('renders correctly with all optional', () => {
    const { getByTestId } = render(
      <Header title="title" subtitle="title"
        leftIcon={<AntDesign name="left" size={18} color="black" />}
        rightIcon={<AntDesign name="right" size={18} color="black" />}
        backIcon={<AntDesign name="left" size={18} color="black" />} />)
    expect(getByTestId('title')).toBeOnTheScreen()
    expect(getByTestId('subtitle')).toBeOnTheScreen()
    expect(getByTestId('back-icon')).toBeOnTheScreen()
    expect(getByTestId('left-icon')).toBeOnTheScreen()
    expect(getByTestId('right-icon')).toBeOnTheScreen()
  })
})
