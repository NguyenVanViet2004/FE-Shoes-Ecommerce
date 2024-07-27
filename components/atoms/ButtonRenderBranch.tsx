import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps, Image, View } from 'tamagui'

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
      height={props.isSelected === true ? 25 : null}
      width={props.isSelected === true ? 25 : null}
    >
      <View
        padding= {typeof props.icon === 'number' ? 8 : 0}>

        {typeof props.icon === 'number'
          ? (
            <Image
              source={props.icon}
              resizeMode="contain"
              height={props.isSelected === true ? 20 : 25}
              width={props.isSelected === true ? 20 : 25}
            />)
          : (props.icon)}
      </View>
    </Button>
  )
}
