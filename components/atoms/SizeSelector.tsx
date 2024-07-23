import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme
} from 'react-native'
import { Text, View } from 'tamagui'

import getColors from '~/constants/Colors'
interface Colors {
  blue: string
  whiteSmoke: string
  black: string
  darkGray: string
}
const colors = getColors(useColorScheme())

interface SizeSelectorProps {
  sizes: string[]
  selectedSize: string
  setSelectedSize: (size: string) => void
  colors: Colors
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
  colors
}) => {
  return (
    <View marginHorizontal={18}>
      <View
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Text fontSize={18} fontWeight="bold">
          Size
        </Text>
        <View style={styles.sizeOptions}>
          <Text style={[styles.sizeOption, styles.activeSizeOption]}>EU</Text>
          <Text style={styles.sizeOption}>US</Text>
          <Text style={styles.sizeOption}>UK</Text>
        </View>
      </View>
      <View
        borderBottomColor={colors.blue}
        borderStyle="dotted"
        marginTop={8}
      />
      <View flexDirection="row" justifyContent="space-between">
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              {
                backgroundColor:
                  size === selectedSize ? colors.blue : colors.whiteSmoke
              }
            ]}
            onPress={() => { setSelectedSize(size) }}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color:
                    size === selectedSize ? colors.whiteSmoke : colors.black
                }
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  activeSizeOption: {
    color: colors.black,
    fontWeight: 'bold'
  },
  sizeButton: {
    alignItems: 'center',
    borderColor: colors.whiteSmoke,
    borderRadius: 50,
    elevation: 3,
    marginVertical: 10,
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: 40
  },
  sizeOption: {
    color: colors.darkGray,
    marginHorizontal: 8
  },
  sizeOptions: {
    flexDirection: 'row'
  },
  sizeText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 7
  }
})

export default SizeSelector
