import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Text } from 'tamagui'
const Favorite: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        textAlign="center"
        fontSize={20}
      >Favorite</Text>
    </SafeAreaView>
  )
}

export default Favorite

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
