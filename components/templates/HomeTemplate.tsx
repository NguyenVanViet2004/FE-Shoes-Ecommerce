import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
import { MotiView } from 'moti'
import React, { useState } from 'react'
import { FlatList, StyleSheet, useColorScheme } from 'react-native'
import { ScrollView, Text, View } from 'tamagui'

import { ButtonRenderBranch } from '~/components/atoms/ButtonRenderBranch'
import FormInputWithLabel from '~/components/atoms/FormInputWithLabel'
import SafeArea from '~/components/atoms/SafeArea'
import { BannerShoesItem } from '~/components/molecules/BannerShoesItem'
import Header from '~/components/molecules/common/Header'
import { ShoesCategory } from '~/components/molecules/ShoesCategory'
import { ListShoesItem } from '~/components/origanisms/ListShoesItem'
import getColors from '~/constants/Colors'
import dataBranch from '~/constants/DataBranch'

const HomeTemplate: React.FC = () => {
  const color = getColors(useColorScheme())

  const [selectedBranch, setSelectBranch] =
    useState<{ logo: number, name: string }>()
  return (
    <SafeArea>
      <ScrollView>
        <View
          flex={1}
          paddingHorizontal={20}
          paddingBottom={130}
          marginTop={20}>

          <Header
            leftIcon={
              <Entypo
                name="grid"
                size={25}
                color={color.midnightBlue} />
            }
            rightIcon={
              <Ionicons
                name="bag-handle-outline"
                size={25}
                color={color.midnightBlue} />
            }
          />

          <View marginBottom={32}>
            <FormInputWithLabel iconLeft={<Feather
              name="search"
              size={23}
              color={color.slateGray}
            />} />
          </View>

          <FlatList
            data={dataBranch}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              const isSelected = selectedBranch?.name === item.name
              const transitionStyle = isSelected
                ? [styles.selectItem, { backgroundColor: color.cornflowerBlue }]
                : styles.unSelectItem
              return (
                <MotiView
                  from={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: index * 200 }}
                  style={transitionStyle}
                >
                  <ButtonRenderBranch
                    icon={item.logo}
                    onPress={() => {
                      if (isSelected) {
                        setSelectBranch(undefined)
                      } else {
                        setSelectBranch(item)
                      }
                    }}
                    isSelected={isSelected}
                  />
                  {isSelected && (
                    <MotiView
                      from={{
                        opacity: 0,
                        translateX: -50
                      }}
                      animate={{
                        opacity: 1,
                        translateX: 0
                      }}
                      transition={{ duration: 350, type: 'timing' }}
                    >
                      <Text
                        fontSize={14}
                        fontWeight={500}
                        color={color.white}
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

          <ListShoesItem dataShoes={dataBranch} />

          <ShoesCategory
            textCategory="newArrivals"
            marginBottom={16}
            marginTop={24} />

          <BannerShoesItem
            label="bestChoice"
            nameShoes="Nike Air Jordan"
            price="849.69" />

          <ShoesCategory
            textCategory="topSeller"
            marginBottom={16}
            marginTop={24} />
          <ListShoesItem dataShoes={dataBranch}/>
        </View>
      </ScrollView>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  selectItem: {
    alignItems: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    marginRight: 16,
    padding: 8
  },
  unSelectItem: {
    marginRight: 16
  }
})

export default HomeTemplate
