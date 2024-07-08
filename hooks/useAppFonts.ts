import { useFonts } from 'expo-font'
import { fromPairs } from 'lodash'

const FontList = {
  Outfit: require('~/assets/fonts/OFL/static/Outfit-Medium.ttf'),
  OutfitBlack: require('~/assets/fonts/OFL/static/Outfit-Black.ttf'),
  OutfitBold: require('~/assets/fonts/OFL/static/Outfit-Bold.ttf'),
  OutfitExtraBold: require('~/assets/fonts/OFL/static/Outfit-ExtraBold.ttf'),
  OutfitExtraLight:
              require('~/assets/fonts/OFL/static/Outfit-ExtraLight.ttf'),
  OutfitLight: require('~/assets/fonts/OFL/static/Outfit-Light.ttf'),
  OutfitMedium: require('~/assets/fonts/OFL/static/Outfit-Medium.ttf'),
  OutfitRegular: require('~/assets/fonts/OFL/static/Outfit-Regular.ttf'),
  OutfitSemiBold: require('~/assets/fonts/OFL/static/Outfit-SemiBold.ttf'),
  OutfitThin: require('~/assets/fonts/OFL/static/Outfit-Thin.ttf'),
  unset: require('~/assets/fonts/OFL/static/Outfit-Medium.ttf')
}
interface AppFontsResponse {
  fontsLoaded: boolean
  fontError: Error | null
  fonts: typeof FontList
}

export const useAppFonts = (): AppFontsResponse => {
  const [fontsLoaded, fontError] = useFonts(FontList)
  const fonts = fromPairs(
    Object.keys(FontList).map(item => [item, item])
  ) as typeof FontList
  return {
    fontError,
    fonts,
    fontsLoaded
  }
}
