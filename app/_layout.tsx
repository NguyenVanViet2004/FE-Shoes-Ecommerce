import '~/tamagui-web.css'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'

import config from '~/tamagui.config'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'

export const unstableSettings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)'
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync()

export default function RootLayout (): React.ReactElement {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  })

  useEffect(() => {
    if (interLoaded || interError !== null) {
      try {
        void SplashScreen.hideAsync()
      } catch (error) {
        console.error('Failed to hide splash screen:', error)
      }
    }
  }, [interLoaded, interError])

  if (interLoaded !== null && interError === null) {
    return <></>
  }

  return <RootLayoutNav />
}

function RootLayoutNav (): React.ReactElement {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }}/>
          {/* <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          /> */}

          <Stack.Screen
            name="modal"
            options={{
              animation: 'slide_from_right',
              gestureDirection: 'horizontal',
              gestureEnabled: true,
              presentation: 'modal',
              title: 'Tamagui + Expo'
            }}
          />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
