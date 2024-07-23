import { Entypo, Ionicons } from '@expo/vector-icons'
import { MotiView } from 'moti'
import React, { useState } from 'react'
import { FlatList, StyleSheet, useColorScheme } from 'react-native'
import { Button, Image, ScrollView, Text, View } from 'tamagui'

import { ButtonIcon } from '~/components/atoms/ButtonIcon'
import { TextInputSearch } from '~/components/atoms/TextInputSearch'
import { InforShoes } from '~/components/molecules/InforShoes'
import { ShoesCategory } from '~/components/molecules/ShoesCategory'
import { ListShoesItem } from '~/components/origanisms/ListShoesItem'
import getColors from '~/constants/Colors'

import Header from '../molecules/common/Header'

const brands = [
  {
    logo: require('assets/images/iconNike.png'),
    name: 'Nike'
  },
  {
    logo: require('assets/images/iconPuma.png'),
    name: 'Puma'
  },
  {
    logo: require('assets/images/iconAdidas.png'),
    name: 'Adidas'
  },
  {
    logo: require('assets/images/iconConverse.png'),
    name: 'Converse'
  },
  {
    logo: require('assets/images/iconUnderAmour.png'),
    name: 'Under Armour'
  }
]

const HomeTemplate: React.FC = () => {
  const colors = getColors(useColorScheme())

  const [selectedBranch, setSelectBranch] =
    useState<{ logo: number, name: string }>()
  return (
    <ScrollView>
      <View flex={1} paddingHorizontal={20} paddingTop={40}>

        <Header
          leftIcon={
            <Button
              unstyled
              padding={10}
              borderRadius={50}
              backgroundColor={colors.white}
              alignSelf="baseline">
              <Entypo
                name="grid"
                size={25}
                color={colors.midnightBlue} />
            </Button>
          }
          rightIcon={
            <Button
              unstyled
              padding={10}
              borderRadius={50}
              backgroundColor={colors.white}
              alignSelf="baseline">
              <Ionicons
                name="bag-handle-outline"
                size={25}
                color={colors.midnightBlue} />
            </Button>
          }
        />

        <View marginBottom={32}>
          <TextInputSearch placeholder="Looking for shoes" />
        </View>

        <FlatList
          data={brands}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const isSelected = selectedBranch?.name === item.name
            const transitionStyle = isSelected
              ? [styles.selectItem, { backgroundColor: colors.cornflowerBlue }]
              : styles.unSelectItem
            return (
              <MotiView
                from={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: index * 200 }}
                style={transitionStyle}
              >
                <ButtonIcon
                  style={isSelected ? styles.selectedLogo : {}}
                  icon={item.logo}
                  onPress={() => { setSelectBranch(item) }}
                  isSelected={isSelected}
                />
                {isSelected && (
                  <MotiView
                    from={{ opacity: 0, translateX: -50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                  >
                    <Text
                      fontSize={14}
                      fontWeight={500}
                      color={colors.white}
                      marginLeft={8}
                    >
                      {item.name}
                    </Text>
                  </MotiView>
                )}
              </MotiView>
            )
          }}
          keyExtractor={(item) => item.name}
        />

        <ShoesCategory
          textCategory="popularShoes"
          marginBottom={16}
          marginTop={24} />

        <FlatList
          horizontal
          data={brands}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <ListShoesItem index={index} />
            )
          }}
          keyExtractor={(item) => item.name}
        />

        <ShoesCategory
          textCategory="newArrivals"
          marginBottom={16}
          marginTop={24} />
        <View
          alignItems="center"
          borderRadius={16}
          padding={20}
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor={colors.white}>
          <InforShoes
            gap={8}
            flex={1}
            label="BEST CHOICE"
            nameShoes="Nike Air Jordan"
            priceShoes="849.69" />
          <Image
            source={require('assets/images/shoes2.png')}
            style={styles.img} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  img: {
    aspectRatio: 1,
    flex: 1,
    maxHeight: 90,
    maxWidth: 120,
    resizeMode: 'contain'
  },
  selectItem: {
    alignItems: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    marginRight: 16,
    padding: 8
  },
  selectedLogo: {
    height: 25,
    width: 25
  },
  unSelectItem: {
    marginRight: 16
  }
})

export default HomeTemplate
