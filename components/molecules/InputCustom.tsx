import React from 'react'
import { useColorScheme } from 'react-native'
import { Input, type InputProps, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'
type props = {
  placeholder: string
  label: string
  icon?: JSX.Element
  onChangeText?: (value: string) => void
} & InputProps

const InputCustom: React.FC<props> = (props: props) => {
  const colors = getColors(useColorScheme())
  return (
    <YStack
      gap={10}
    >
      <Text
        fontSize={16}
        fontWeight="500"
        color={colors.midnightBlue}
      >
        {props.label}
      </Text>
      <XStack
      >
        <Input
          {...props}
          paddingHorizontal={16}
          borderRadius={50}
          height={48}
          backgroundColor={colors.white}
          alignItems="center"
          width={'100%'}
          color={colors.black}
          borderWidth={0}

        />
        {
          props.icon
        }
      </XStack>
    </YStack>

  )
}

export default InputCustom
