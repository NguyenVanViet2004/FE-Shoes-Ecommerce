import { MotiView } from 'moti'
import React from 'react'
import { FlatList, StyleSheet, useColorScheme } from 'react-native'
import { Image, Text, View } from 'tamagui'

import { ButtonAdd } from '~/components/atoms/ButtonAdd'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

interface Props {
  dataShoes: any
}

export const ListShoesItem = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  const { t } = useTranslation()

  const renderItemList = (index: number, item: any): React.ReactElement => {
    return (
      <MotiView
        style={[styles.container, { backgroundColor: colors.white }]}
        from={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: index * 200 }}>
        <Image
          source={require('assets/images/shoes3.png')}
          height={100}
          maxWidth={120}
        />
        <View
          flexDirection="row"
          justifyContent="space-between"
          paddingLeft={12}
          alignItems="flex-end">
          <View gap={8} paddingRight={21} paddingBottom={12}>
            <Text
              fontSize={12}
              fontWeight={400}
              color={colors.cornflowerBlue}>{t('home.bestSeller')}</Text>
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

  return (
    <FlatList
      horizontal
      data={props.dataShoes}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => renderItemList(index, item)}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'column',
    marginRight: 12
  }
})
