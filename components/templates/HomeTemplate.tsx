import { Entypo, Ionicons } from '@expo/vector-icons'
import { MotiView } from 'moti'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, useColorScheme } from 'react-native'
import { Image, ScrollView, Text, View } from 'tamagui'

import { ButtonIcon } from '~/components/atoms/ButtonIcon'
import { TextInputSearch } from '~/components/atoms/TextInputSearch'
import { HeaderComponent } from '~/components/molecules/HeaderComponent'
import { InforShoes } from '~/components/molecules/InforShoes'
import { ShoesCategory } from '~/components/molecules/ShoesCategory'
import { ListShoesItem } from '~/components/origanisms/ListShoesItem'
import getColors from '~/constants/Colors'

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

const HomeScreen: React.FC = () => {
  const colors = getColors(useColorScheme())

  const [selectedBranch, setSelectBranch] =
    useState<{ logo: number, name: string }>()
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>

        <HeaderComponent
          marginBottom={24}
          iconLeft={
            <Entypo
              name="grid"
              size={25}
              color={colors.midnightBlue}
              style={styles.icon} />}
          iconRight={
            <Ionicons
              name="bag-handle-outline"
              size={25}
              color="black"
              style={styles.icon} />}
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
            return (
              <MotiView
                from={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: index * 200 }}
                style={isSelected
                  ? [styles.selectedItemContainer, { backgroundColor: colors.cornflowerBlue }]
                  : styles.unSelectedItemContainer}
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
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 40
  },
  icon: {
    padding: 9
  },
  img: {
    aspectRatio: 1,
    flex: 1,
    maxHeight: 90,
    maxWidth: 120,
    resizeMode: 'contain'
  },
  selectedItemContainer: {
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
  unSelectedItemContainer: {
    marginRight: 16
  }
})

export default HomeScreen
