import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { Image, View } from 'tamagui'

const SplashTemplate = (): React.ReactElement => {
  const colorScheme = useColorScheme()
  const barStyle = colorScheme === 'dark' ? 'light-content' : 'dark-content'
  return (
    <View flex={1}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={barStyle} />
      <Image
        height={'100%'}
        width={'100%'}
        source={require('assets/images/splashImg.jpg')}
      />
    </View>
  )
}

export default SplashTemplate
