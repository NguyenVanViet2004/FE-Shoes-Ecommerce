import { type ColorSchemeName } from 'react-native'
const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'
const colors = {
  dark: {
    background: '#000',
    cornflowerBlue: '#5B9EE1',
    midnightBlue: '#1A2530',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    text: '#fff',
    tint: tintColorDark
  },
  light: {
    background: '#fff',
    lightGray: '#F2F2F2',
    slateGray: '#707B81',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    text: '#000',
    tint: tintColorLight
  }
}

const getColors = (colorScheme: ColorSchemeName): any => {
  return colorScheme === 'dark' ? colors.dark : colors.light
}
export default getColors
