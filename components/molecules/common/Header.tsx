import { isNil, isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Image, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface props {
  leftIcon?: number | React.ReactElement
  rightIcon?: number | React.ReactElement
  title: string
  subtitle?: string
}

const Header: React.FC<props> = ({ leftIcon, rightIcon, title, subtitle }) => {
  const colors = getColors(useColorScheme())
  const renderIcon = (icon: number | ReactElement): React.ReactElement => {
    if (isNumber(icon)) {
      return <Image source={icon} />
    }
    return icon
  }

  return (
    <YStack marginTop={20}>
      {!isNil(leftIcon) && renderIcon(leftIcon)}
      <XStack alignItems="center" justifyContent="center">
        <YStack
          alignItems="center"
          marginTop={50}
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
