import { isNil } from 'lodash'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Input, type InputProps, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

type props = {
  label?: string
  icon?: JSX.Element
  iconLeft?: JSX.Element
} & InputProps

const FormInputWithLabel: React.FC<props> = (props: props) => {
  const colors = getColors(useColorScheme())

  return (
    <YStack gap={10}>
      <Text
        fontSize={16}
        fontWeight="bold">
        {props.label}
      </Text>

      <XStack
        gap={12}
        paddingHorizontal={16}
        borderRadius={50}
        height={48}
        backgroundColor={colors.white}
        alignItems="center">
        {!isNil(props.iconLeft) && props.iconLeft}
        <Input
          unstyled
          {...props}
          flex={1}
          color={colors.black}
          borderWidth={0} />

        {!isNil(props.icon) && props.icon}
      </XStack>

    </YStack>
  )
}

export default FormInputWithLabel
