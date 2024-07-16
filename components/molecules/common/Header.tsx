import { isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Image, Text, XStack, YStack } from 'tamagui'
import SafeArea from '~/components/atoms/SafeArea'
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
    <SafeArea>
      <YStack>
        <XStack>
          {iconLeft !== undefined && renderIcon(iconLeft)}
          {iconRight !== undefined && renderIcon(iconRight)}
        </XStack>
        <XStack
          justifyContent="center"
        >
          <YStack
            alignItems="center"
            marginTop={30}
            gap={10}
          >
            <Text
              fontSize={28}
              fontWeight="500"
              color={colors.midnightBlue}
            >
              {title}
            </Text>
            <Text
              fontSize={16}
              fontWeight="400"
              color={colors.slateGray}
            >
              {subtitle}
            </Text>
          </YStack>
        </XStack>

      </YStack>
    </SafeArea>
  )
}
export default Header
