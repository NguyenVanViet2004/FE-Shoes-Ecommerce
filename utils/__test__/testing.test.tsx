import { View } from 'tamagui'

import { Provider, render } from '~/utils/testing'

describe('testing', () => {
  describe('Provider', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(
        <Provider>
          <View testID="child-component"></View>
        </Provider>
      )
      expect(getByTestId('child-component')).toBeOnTheScreen()
    })
  })

  describe('render', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(
        <Provider>
          <View testID="child-component"></View>
        </Provider>
      )
      expect(getByTestId('child-component')).toBeOnTheScreen()
    })
  })
})
