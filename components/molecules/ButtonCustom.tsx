import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'

interface ButtonCustomProps {
  onPress?: () => void
  buttonText?: string
  textColor?: string
  backgroundColor?: string
  icon?: JSX.Element
}
const ButtonCustom: React.FC<ButtonCustomProps> = (
  {
    onPress,
    buttonText,
    textColor,
    backgroundColor,
    icon
  }) => {
  return (
    <YStack
      marginTop={30}
    >
      <XStack
      >
        <TouchableOpacity
          style ={[styles.customButton, { backgroundColor }]}
          onPress={onPress}
        >
          {icon}
          <Text
            fontWeight={'500'}
            fontSize={18}
            color={textColor}
          >
            {buttonText}
          </Text>

        </TouchableOpacity>

      </XStack>
    </YStack>
  )
}
const styles = StyleSheet.create({
  customButton: {
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    gap: 8,
    height: 54,
    justifyContent: 'center',
    width: '100%'
  }
})

export default ButtonCustom
