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

const HeaderDetails: React.FC<props> = ({
  leftIcon,
  rightIcon,
  title,
  subtitle
}) => {
  const colors = getColors(useColorScheme())
  const renderIcon = (icon: number | ReactElement): React.ReactElement => {
    if (isNumber(icon)) {
      return <Image source={icon} />
    }
    return icon
  }

  return (
    <XStack
      paddingHorizontal={15}
      alignItems="center"
      justifyContent="space-between"
      paddingVertical={5}
    >
      {!isNil(leftIcon) && renderIcon(leftIcon)}
      <YStack alignItems="center">
        <Text fontSize={16} fontWeight={'bold'} color={colors.midnightBlue}>
          {title}
        </Text>
        {subtitle != null && subtitle !== '' && (
          <Text fontSize={16} fontWeight="500" color={colors.slateGray}>
            {subtitle}
          </Text>
        )}
      </YStack>
      {!isNil(rightIcon) && renderIcon(rightIcon)}
    </XStack>
  )
}

export default HeaderDetails
