import { fireEvent } from '@testing-library/react-native'

import { PositiveButton } from '~/components/atoms/PositiveButton'
import { render } from '~/utils/testing'

describe('PositiveButton', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<PositiveButton title="hello world" />)
    expect(getByTestId('positive-button')).toBeOnTheScreen()
  })

  it('calls onPress when PositiveButton is pressed', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(
      <PositiveButton title="hello world"
        onPress={mockOnPress}
      />)
    expect(getByTestId('positive-button')).toBeOnTheScreen()
    fireEvent.press(getByTestId('positive-button'))
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
})
