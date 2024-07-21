import { MotiView } from 'moti'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { Image, Text, View } from 'tamagui'

import { ButtonAdd } from '~/components/atoms/ButtonAdd'
import getColors from '~/constants/Colors'

interface Props {
  index: number
}

export const ListShoesItem = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <MotiView
      style={[styles.container, { backgroundColor: colors.white }]}
      from={{ opacity: 0, translateX: 50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: props.index * 200 }}>
      <Image
        source={require('assets/images/shoes3.png')}
        style={styles.img1} />
      <View
        flexDirection="row"
        justifyContent="space-between"
        paddingLeft={12}
        alignItems="flex-end">
        <View gap={8} paddingRight={21} paddingBottom={12}>
          <Text
            fontSize={12}
            fontWeight={400}
            color={colors.cornflowerBlue}>Best Seller</Text>
          <Text
            fontSize={16}
            fontWeight={500}
            color={colors.midnightBlue}>Nike Jordan</Text>
          <Text
            fontSize={14}
            fontWeight={500}
            color={colors.midnightBlue}>$493.00</Text>
        </View>
        <ButtonAdd alignSelf="flex-end" />
      </View>
    </MotiView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'column',
    marginRight: 12
  },
  img1: {
    height: 100,
    maxWidth: 120,
    resizeMode: 'contain'
  }
})
