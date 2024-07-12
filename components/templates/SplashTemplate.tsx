import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { Image, View } from 'tamagui'

const SplashTemplate = (): React.ReactElement => {
  return (
    <View flex={1}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'} />
      <Image
        style={styles.img}
        source={require('assets/images/splashImg.jpg')}
      />
    </View>
  )
}

export default SplashTemplate

const styles = StyleSheet.create({
  img: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%'
  }
})
