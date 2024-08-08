import { isNil, isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Image, Text, type TextProps, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  leftIcon?: number | React.ReactElement
  rightIcon?: number | React.ReactElement
  title?: string
  subtitle?: string
  position?: boolean
  onPressLeftIcon?: () => void
  onPressRightIcon?: () => void
} & TextProps

const Header = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())

  const renderIcon = (icon: number | ReactElement,
    onPress?: () => void): React.ReactElement => {
    if (isNumber(icon)) {
      return <Image source={icon} />
    }
    return <Button unstyled
      padding={10}
      borderRadius={50}
      backgroundColor={colors.white}
      alignSelf="baseline"
      icon={icon}
      onPress={onPress}
      position={props.position === true ? 'absolute' : undefined} />
  }

  const renderTitleAlone = (title: string): React.ReactElement => {
    return (
      <Text
        fontWeight={500}
        {...props}>
        {title}
      </Text>
    )
  }

  return (
    <YStack marginTop={20}>
      <XStack
        alignItems="center"
        justifyContent="space-between">
        {!isNil(props.leftIcon) &&
          renderIcon(props.leftIcon, props.onPressLeftIcon)}
        {!isNil(props.title) && isNil(props.subtitle) && (
          <XStack
            flex={1}
            alignItems="center"
            justifyContent="center">
            {renderTitleAlone(props.title)}
          </XStack>
        )}
        {!isNil(props.title) && !isNil(props.subtitle) && (
          <YStack
            marginTop={50}
            alignItems="center"
            gap={10}
            justifyContent="center"
            flex={1}>
            <Text fontSize={28} fontWeight="bold" color={colors.midnightBlue}>
              {props.title}
            </Text>
            <Text fontSize={16} fontWeight={500} color={colors.slateGray}>
              {props.subtitle}
            </Text>
          </YStack>
        )}
        {!isNil(props.rightIcon) &&
          renderIcon(props.rightIcon, props.onPressRightIcon)}
      </XStack>
    </YStack>
  )
}

export default Header
