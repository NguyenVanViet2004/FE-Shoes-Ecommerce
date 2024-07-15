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
          backgroundColor={'#FFF'}
          alignItems="center"
          width={'100%'}
          borderWidth={0}
          color={'black'}
        />
        {
          props.icon
        }
      </XStack>
    </YStack>

  )
}

export default InputCustom