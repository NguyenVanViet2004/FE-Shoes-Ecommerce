import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { XStack, YStack } from 'tamagui'
import Colors from '~/constants/Colors'

interface BackCustomProps {
  onPress?: () => void
}
const BackCustom: React.FC<BackCustomProps> = ({ onPress }) => {
  return (
    <YStack
      marginTop={30}
    >
      <XStack>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={onPress}
        >
          <AntDesign name="left" size={18} color={Colors.black} />
        </TouchableOpacity>
      </XStack>
    </YStack>
  )
}

const styles = StyleSheet.create({
  buttonBack: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColorWhite,
    borderRadius: 40,
    height: 44,
    justifyContent: 'center',
    width: 44
  }
})

export default BackCustom
