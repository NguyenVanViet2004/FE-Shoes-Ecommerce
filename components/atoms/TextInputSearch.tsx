import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { Input, type InputProps, XStack } from 'tamagui'

import getColors from '~/constants/Colors'

export const TextInputSearch = (props: InputProps): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <XStack
      alignItems="center"
      borderWidth={0}
      borderRadius={50}
      backgroundColor={colors.white}
      paddingHorizontal={14}
    >
      <Feather
        name="search"
        size={23}
        color={colors.slateGray}
        style={styles.iconSearch}/>
      <Input
        {...props}
        height={48}
        fontSize={14}
        backgroundColor={colors.white}
        borderWidth={0}
      />
    </XStack>
  )
}

const styles = StyleSheet.create({
  iconSearch: {
    marginLeft: 3
  }
})
