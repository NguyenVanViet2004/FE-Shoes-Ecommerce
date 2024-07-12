import React from 'react'
import { StatusBar } from 'react-native'
import { Image, View } from 'tamagui'

const SplashTemplate = (): React.ReactElement => {
  return (
    <View flex={1}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'} />
      <Image
        height={'100%'}
        width={'100%'}
        source={require('assets/images/splashImg.jpg')}
      />
    </View>
  )
}

export default SplashTemplate
