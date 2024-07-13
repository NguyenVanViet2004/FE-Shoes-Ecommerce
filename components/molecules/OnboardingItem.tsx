import React from 'react'
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native'
import { Image, Text, View } from 'tamagui'

import Dot from '~/components/atoms/Dot'
import getColors from '~/constants/Colors'

import { ContentOnboarding } from './ContentOnboarding'

interface Props {
  item: {
    img: number
    title: string
    des: string
  }
}

export const OnboardingItem = (props: Props): React.ReactElement => {
  const { item } = props
  const colorlight = getColors(useColorScheme())
  const { width, height } = useWindowDimensions()

  return (
    <View style={[styles.containerItem, { width }]}>
      <View flex={3} alignItems="center" justifyContent="center">
        <View alignItems="center">
          <Text
            color={colorlight.lightGray}
            marginTop={height * 0.10}
            fontSize={154}
            style={styles.nikeText}>
            NIKE
          </Text>
        </View>
        <Image
          marginTop={height * 0.08}
          source={item.img}
        />
      </View>
      <View flexDirection="row" marginLeft={20} flex={1.5}>
        <ContentOnboarding flex={4} title={item.title} des={item.des} />
        <View flex={0.5}></View>
      </View>
      <Dot position="absolute" top={'53%'} right={40} />
      <Dot position="absolute" top={'20%'} left={47} />
      <Dot position="absolute" top={'60%'} left={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    flex: 1
  },
  nikeText: {
    fontWeight: 'bold',
    position: 'absolute'
  }
})
