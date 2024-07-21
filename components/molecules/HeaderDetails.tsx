import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'

import getColors from '~/constants/Colors'
const colors = getColors(useColorScheme())
const HeaderDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Entypo name="chevron-left" size={24} color={colors.black} />
      </TouchableOpacity>
      <Text style={styles.title}>Men’s Shoes</Text>
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="shopping-cart" size={24} color={colors.black} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.whiteSmke,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 3,
    height: 40,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: 40
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default HeaderDetails
