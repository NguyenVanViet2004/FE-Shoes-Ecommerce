import { isNil, isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Image, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

interface props {
  leftIcon?: number | React.ReactElement
  rightIcon?: number | React.ReactElement
  title?: string
  subtitle?: string
  label?: string
}

const Header: React.FC<props> =
  ({ leftIcon, rightIcon, title, subtitle, label }) => {
    const colors = getColors(useColorScheme())
    const { t } = useTranslation()
    const renderIcon = (icon: number | ReactElement): React.ReactElement => {
      if (isNumber(icon)) {
        return <Image source={icon} />
      }
      return <Button
        unstyled
        padding={10}
        borderRadius={50}
        backgroundColor={colors.white}
        alignSelf="baseline">{icon}</Button>
    }

    const renderLabel = (label: string): React.ReactElement => {
      return (
        <Text
          fontSize={16}
          fontWeight={500} >
          {t('account.' + label)}</Text>
      )
    }

    return (
      <YStack marginTop={20}>
        <XStack alignItems="center" justifyContent="space-between" >
          {!isNil(leftIcon) && renderIcon(leftIcon)}

          {!isNil(label) && (
            <XStack flex={1} alignItems="center" justifyContent="center">
              {renderLabel(label)}
            </XStack>
          )}

          {!isNil(title) && !isNil(subtitle) && (
            <YStack alignItems="center" gap={10}>
              <Text fontSize={28} fontWeight="bold" color={colors.midnightBlue}>
                {title}
              </Text>
              <Text fontSize={16} fontWeight={500} color={colors.slateGray}>
                {subtitle}
              </Text>
            </YStack>
          )}
          {!isNil(rightIcon) && renderIcon(rightIcon)}
        </XStack>
      </YStack>
    )
  }
export default Header
