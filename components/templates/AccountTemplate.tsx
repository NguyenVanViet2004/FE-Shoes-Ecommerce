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

  const renderIcon = (type: 'MaterialCommunityIcons' | 'AntDesign' | 'Ionicons',
    name: any, size: number, color: any): React.ReactElement => {
    switch (type) {
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={name} size={size} color={color} />
      case 'AntDesign':
        return <AntDesign name={name} size={size} color={color} />
      case 'Ionicons':
        return <Ionicons name={name} size={size} color={color} />
      default:
        return <Ionicons name={name} size={size} color={color} />
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
                  colors.slateGray)}
              rightIcon={
                renderIcon(method.rightIconType,
                  method.rightIconName,
                  15,
                  colors.slateGray)} />
          ))}

          <Text
            fontSize={18}
            fontWeight={500}
            marginVertical={24}>{t('account.appSettings')}</Text>

          {dataMethodSetting.map((methodSetting) => (
            <ChooseMethod
              key={methodSetting.id}
              nameMethod={methodSetting.nameMethod}
              useSwitch />
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
