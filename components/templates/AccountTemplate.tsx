import React from 'react'
import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { ScrollView, Text, View } from 'tamagui'

import { RenderIcon } from '~/components/atoms/RenderIcon'
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
            title="account&Settings" />

          <Text
            fontSize={18}
            fontWeight={500}
            marginVertical={24}>{t('account.account')}</Text>

          {dataMethodAccount.map((method) => (
            <ChooseMethod key={method.id} nameMethod={method.nameMethod}
              leftIcon={
                <RenderIcon
                  iconComponent={method.typeIconLeft}
                  name={method.leftIconName}
                  size={25}
                  color={colors.slateGray as string}
                />
              }
              rightIcon={
                <RenderIcon
                  iconComponent={method.typeIconRight}
                  name={method.rightIconName}
                  size={16}
                  color={colors.slateGray as string}
                />
              } />
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
