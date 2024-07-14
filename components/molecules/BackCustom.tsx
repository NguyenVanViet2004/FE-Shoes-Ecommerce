import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import { XStack, YStack } from 'tamagui'

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
        <TouchableOpacity
          style={[styles.buttonBack, { backgroundColor: colors.white }]}
          onPress={onPress}
        >
          <AntDesign name="left" size={18} color={colors.black} />
        </TouchableOpacity>
      </XStack>
    </YStack>
  )
}
const styles = StyleSheet.create({
  buttonBack: {
    alignItems: 'center',

    borderRadius: 40,
    height: 44,
    justifyContent: 'center',
    width: 44
  }
})

export default BackCustom
