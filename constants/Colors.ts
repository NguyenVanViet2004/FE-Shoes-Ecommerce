import { type ColorSchemeName } from 'react-native'
const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

const colors = {
  dark: {
    background: '#000',
    backgroundApp: '#fff',
    black: '#000000',
    cornflowerBlue: '#5B9EE1',
    lightGray: '#F2F2F2',
    lightSilver: '#F8F9FA',
    midnightBlue: '#1A2530',
    slateGray: '#707B81',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    text: '#fff',
    tint: tintColorDark,
    white: '#FFFFFF'

  },
  light: {
    background: '#fff',
    backgroundApp: '#fff',
    black: '#000000',
    cornflowerBlue: '#5B9EE1',
    lightGray: '#F2F2F2',
    lightSilver: '#F8F9FA',
    midnightBlue: '#1A2530',
    slateGray: '#707B81',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    text: '#000',
    tint: tintColorLight,
    white: '#FFFFFF'
  }

}

const getColors = (colorScheme: ColorSchemeName): any => {
  return colorScheme === 'dark' ? colors.dark : colors.light
}

export default getColors
