import { isNil, isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Image, Text, View, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface props {
  leftIcon?: number | React.ReactElement
  rightIcon?: number | React.ReactElement
  title?: string
  subtitle?: string
  visibleTitleSubtitle?: boolean
}

const Header: React.FC<props> = (
  { leftIcon, rightIcon, title, subtitle, visibleTitleSubtitle }
) => {
  const colors = getColors(useColorScheme())
  const renderIcon = (icon: number | ReactElement): React.ReactElement => {
    if (isNumber(icon)) {
      return <Image source={icon} />
    }
    return <Button unstyled
      padding={10}
      borderRadius={50}
      backgroundColor={colors.white}
      alignSelf="baseline">{icon}</Button>
  }

  return (
    <XStack marginTop={20} justifyContent="center">
      <View position="absolute" left={0}>
        {!isNil(leftIcon) && renderIcon(leftIcon)}
      </View>

      <YStack
        display={!isNil(visibleTitleSubtitle) && visibleTitleSubtitle ? 'flex' : 'none'}
        marginTop={70}
        alignItems="center"
        gap={10}>
        <Text
          fontSize={28}
          fontWeight="bold">
          {title}
        </Text>
        <Text
          fontSize={16}
          fontWeight="500"
          color={colors.slateGray}>
          {subtitle}
        </Text>
      </YStack>

      <View position="absolute" right={0}>
        {!isNil(rightIcon) && renderIcon(rightIcon)}
      </View>
    </XStack>
  )
}
export default Header
