import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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

export default HomeScreen
