import React from 'react'
import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { ScrollView, Text, View } from 'tamagui'

import Icon from '~/components/atoms/Icons'
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

  const handleSwitchChange = (checked: boolean): void => {
    console.log('Switch state :', checked)
  }

  const renderIcon = (
    IconComponent: any,
    name: string,
    size: number,
    color: string
  ): React.ReactElement => {
    return (
      <Icon type={IconComponent} name={name} size={size} color={color}/>
    )
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
                renderIcon(method.typeIconLeft,
                  method.leftIconName,
                  25,
                  colors.slateGray as string)}
              rightIcon={renderIcon(method.typeIconRight,
                method.rightIconName,
                16,
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
