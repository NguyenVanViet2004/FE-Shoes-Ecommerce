import { isNil, isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Image, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface props {
  leftIcon?: number | React.ReactElement
  rightIcon?: number | React.ReactElement
  title?: string
  subtitle?: string
}

const Header: React.FC<props> = ({ leftIcon, rightIcon, title, subtitle }) => {
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
    <YStack marginTop={20}>
      <XStack alignItems="center" justifyContent="space-between">
        {!isNil(leftIcon) && renderIcon(leftIcon)}
        <YStack
          alignItems="center"
          gap={10}>
          <Text
            fontSize={28}
            fontWeight="bold"
            color={colors.midnightBlue}>
            {title}
          </Text>
          <Text
            fontSize={16}
            fontWeight="500"
            color={colors.slateGray}>
            {subtitle}
          </Text>
        </YStack>
        {!isNil(rightIcon) && renderIcon(rightIcon)}
      </XStack>
    </YStack>
  )
}
export default Header
