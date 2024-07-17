import { isNil, isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Image, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface props {
  iconLeft?: number | React.ReactElement
  iconRight?: number | React.ReactElement
  title: string
  subtitle?: string
}

const Header: React.FC<props> = ({ iconLeft, iconRight, title, subtitle }) => {
  const colors = getColors(useColorScheme())
  const renderIcon = (icon: number | ReactElement): React.ReactElement => {
    if (isNumber(icon)) {
      return <Image source={icon} />
    }
    return icon
  }

  return (

    <YStack marginTop={60}>
      <XStack>

        {!isNil(iconLeft) && renderIcon(iconLeft)}
        <XStack flex={1}>

          <YStack
            alignItems="center"
            marginTop={80}
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

        </XStack>
        {!isNil(iconRight) && renderIcon(iconRight)}
      </XStack>

    </YStack>
  )
}
export default Header
