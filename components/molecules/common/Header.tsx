import { isNil, isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Image, Text, type TextProps, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

type Props = {
  leftIcon?: number | React.ReactElement
  rightIcon?: number | React.ReactElement
  title?: string
  subtitle?: string
  centered?: boolean
} & TextProps

const Header: React.FC<Props> =
  ({ leftIcon, rightIcon, title, subtitle, centered = true, ...textProp }) => {
    const colors = getColors(useColorScheme())
    const { t } = useTranslation()
    const renderIcon = (icon: number | ReactElement): React.ReactElement => {
      if (isNumber(icon)) {
        return <Image source={icon} />
      }
      return (
        <Button
          unstyled
          padding={10}
          borderRadius={50}
          backgroundColor={colors.white}
          alignSelf="baseline"
        >
          {icon}
        </Button>
      )
    }

    const renderTitleAlone = (title: string): React.ReactElement => {
      return (
        <Text
          fontSize={16}
          fontWeight={500}
          {...textProp}>
          {t('account.' + title)}</Text>
      )
    }

    return (
      <YStack marginTop={20}>
        <XStack
          alignItems="center"
          justifyContent={centered ? 'space-between' : 'flex-start'}>
          {!isNil(leftIcon) && renderIcon(leftIcon)}

          {!isNil(title) && (
            <XStack
              flex={1}
              alignItems="center"
              justifyContent={centered ? 'center' : 'flex-start'}>
              {renderTitleAlone(title)}
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
