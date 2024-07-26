import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { Button, type ButtonProps, Image } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  isSelected?: boolean
  icon: number | React.ReactElement
} & ButtonProps

export const ButtonRenderBranch = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())

  return (
    <Button
      unstyled
      backgroundColor={colors.white}
      borderRadius={30}
      alignItems="center"
      justifyContent="center"
      onPress={props.onPress}
      style={
        props.isSelected === true
          ? styles.selectedLogo
          : {}
      }>
      <View
        style={
          typeof props.icon === 'number'
            ? styles.iconWrapperWithImage
            : styles.iconWrapper
        }>

        {typeof props.icon === 'number'
          ? (
            <Image
              source={props.icon}
              style={[
                styles.img,
                props.isSelected === true && styles.selectedImg
              ]}
            />)
          : (props.icon)
        }
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 0
  },
  iconWrapperWithImage: {
    padding: 8
  },
  img: {
    height: 25,
    resizeMode: 'contain',
    width: 25
  },
  selectedImg: {
    height: 20,
    width: 20
  },
  selectedLogo: {
    height: 25,
    width: 25
  }
})
