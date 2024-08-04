import { isNil, isNumber } from 'lodash'
import React, { type ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Image, Text, type TextProps, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  leftIcon?: number | React.ReactElement
  rightIcon?: number | React.ReactElement
  title?: string
  centered?: boolean
} & TextProps

const Header: React.FC<Props> =
  ({ leftIcon, rightIcon, title, centered = true, ...textProp }) => {
    const colors = getColors(useColorScheme())
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
          {title}</Text>
      )
    }

    return (
      <YStack >
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

          {!isNil(rightIcon) && renderIcon(rightIcon)}
        </XStack>
      </YStack>
    )
  }
export default Header
