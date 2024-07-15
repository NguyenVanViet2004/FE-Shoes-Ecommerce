import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface BackCustomProps {
  onPress?: () => void
}
const BackCustom: React.FC<BackCustomProps> = ({ onPress }) => {
  const colors = getColors(useColorScheme())

  return (
    <YStack
      marginTop={60}
    >
      <XStack>
        <Button
          padding={0}
          width={44}
          height={44}
          borderRadius={40}
          backgroundColor={colors.white}
          borderWidth={0}
          onPress={onPress}
        >
          <AntDesign name="left" size={18} color={colors.black} />
        </Button>
      </XStack>
    </YStack>
  )
}

export default BackCustom
