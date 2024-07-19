import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Text } from 'tamagui'
const NotificationScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        textAlign="center"
        fontSize={20}
      >NotificationScreen</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default NotificationScreen
