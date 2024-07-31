import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { ScrollView, Text, View } from 'tamagui'

import SafeArea from '~/components/atoms/SafeArea'
import { ChooseMethod } from '~/components/molecules/ChooseMethod'
import Header from '~/components/molecules/common/Header'
import getColors from '~/constants/Colors'
import dataMethodAccount from '~/constants/DataMethodAccount'
import dataMethodSetting from '~/constants/DataMethodSetting'
import useTranslation from '~/hooks/useTranslation'
const AccountTemplate: React.FC = () => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())

  type IconType = 'MaterialCommunityIcons' | 'AntDesign' | 'Ionicons'

  const handleSwitchChange = (checked: boolean): void => {
    console.log('Switch state :', checked)
  }

  const renderIcon = (
    type: IconType,
    name: string,
    size: number,
    color: string
  ): React.ReactElement => {
    switch (type) {
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons
          name={name as keyof typeof MaterialCommunityIcons.glyphMap}
          size={size}
          color={color} />
      case 'AntDesign':
        return <AntDesign
          name={name as keyof typeof AntDesign.glyphMap}
          size={size}
          color={color} />
      case 'Ionicons':
        return <Ionicons
          name={name as keyof typeof Ionicons.glyphMap}
          size={size}
          color={color} />
      default:
        return <Ionicons
          name={name as keyof typeof Ionicons.glyphMap}
          size={size}
          color={color} />
    }
  }
  return (
    <SafeArea style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={colors.lightSilver} />
        <View
          flex={1}
          paddingBottom={120}
          paddingHorizontal={20}
          backgroundColor={colors.lightSilver}>
          <Header
            label="account&Settings" />

          <Text
            fontSize={18}
            fontWeight={500}
            marginVertical={24}>{t('account.account')}</Text>

          {dataMethodAccount.map((method) => (
            <ChooseMethod key={method.id} nameMethod={method.nameMethod}
              leftIcon={
                renderIcon(method.leftIconType,
                  method.leftIconName,
                  24,
                  colors.slateGray as string)}
              rightIcon={
                renderIcon(method.rightIconType,
                  method.rightIconName,
                  15,
                  colors.slateGray as string)} />
          ))}

          <Text
            fontSize={18}
            fontWeight={500}
            marginVertical={24}>{t('account.appSettings')}</Text>

          {dataMethodSetting.map((methodSetting) => (
            <ChooseMethod
              key={methodSetting.id}
              nameMethod={methodSetting.nameMethod}
              useSwitch
              onCheckedChange={handleSwitchChange} />
          ))}
        </View>
      </ScrollView>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default AccountTemplate
