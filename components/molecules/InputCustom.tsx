import React from 'react'
import { Input, type InputProps, XStack, YStack } from 'tamagui'

type props = {
  placeholder: string
  label: string
  icon?: JSX.Element
  onChangeText?: (value: string) => void
} & InputProps

const InputCustom: React.FC<props> = (props: props) => {
  return (
    <YStack>
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
