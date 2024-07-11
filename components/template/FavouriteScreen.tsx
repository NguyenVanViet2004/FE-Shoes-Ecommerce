import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite</Text>
    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
