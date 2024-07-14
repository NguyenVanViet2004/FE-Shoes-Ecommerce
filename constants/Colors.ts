import { type ColorSchemeName } from 'react-native'
const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'


const colors = {

 

  dark: {
    background: '#000',
    backgroundApp: '#fff',
    cornflowerBlue: '#5B9EE1',
    lightGray: '#F2F2F2',
    midnightBlue: '#1A2530',
    slateGray: '#707B81',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    text: '#fff',
    tint: tintColorDark,
    white: '#FFFFFF',

    Blue: '#5B9EE1',
    Main: '#F8F9FA',
    White: '#FFF',
    black: '#1A2530',
    Gray: '#707B81',
  },
  light: {
    background: '#fff',
    backgroundApp: '#fff',
    cornflowerBlue: '#5B9EE1',
    lightGray: '#F2F2F2',
    midnightBlue: '#1A2530',
    slateGray: '#707B81',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    text: '#000',
    tint: tintColorLight,
    white: '#FFFFFF',

    Blue: '#5B9EE1',
    Main: '#F8F9FA',
    White: '#FFF',
    black: '#1A2530',
    textGray: '#707B81',
  }


}

const getColors = (colorScheme: ColorSchemeName): any => {
  return colorScheme === 'dark' ? colors.dark : colors.light
}

export default getColors
