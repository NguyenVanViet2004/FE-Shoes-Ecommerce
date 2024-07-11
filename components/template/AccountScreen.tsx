import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default AccountScreen
