import { fireEvent } from '@testing-library/react-native'

import { NegativeButton } from '~/components/atoms/NegativeButton'
import { render } from '~/utils/testing'

describe('NegativeButton', () => {
  it('renders correctly without styles props', () => {
    const { getByTestId } = render(<NegativeButton title="hello world" />)
    expect(getByTestId('negative-button')).toBeOnTheScreen()
  })

  it('renders correctly with styles props', () => {
    const { getByTestId } = render(
      <NegativeButton
        title="hello world"
        height={100}
        color="red"
      />)
    expect(getByTestId('negative-button')).toHaveStyle({ height: 100 })
  })

  it('calls onPress when NegativeButton is pressed', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(
      <NegativeButton title="hello world"
        onPress={mockOnPress} />
    )
    expect(getByTestId('negative-button')).toBeOnTheScreen()
    fireEvent.press(getByTestId('negative-button'))
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
})
