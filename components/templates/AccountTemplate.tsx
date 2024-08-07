import React from 'react'
import { useColorScheme } from 'react-native'
import { ScrollView, View } from 'tamagui'

import { RenderIcon } from '~/components/atoms/RenderIcon'
import SafeArea from '~/components/atoms/SafeArea'
import { ChooseMethod } from '~/components/molecules/ChooseMethod'
import Header from '~/components/molecules/common/Header'
import { ShoesCategory } from '~/components/molecules/ShoesCategory'
import getColors from '~/constants/Colors'
import dataMethodAccount from '~/constants/DataMethodAccount'
import dataMethodSetting from '~/constants/DataMethodSetting'
import useTranslation from '~/hooks/useTranslation'

const AccountTemplate: React.FC = () => {
  const colors = getColors(useColorScheme())
  const { t } = useTranslation()

  const handleSwitchChange = (checked: boolean): void => {
    console.log('Switch state :', checked)
  }

  return (
    <SafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          flex={1}
          paddingBottom={120}
          paddingHorizontal={20}>

          <Header title={t('account.account&Settings')} fontSize={18}/>

          <ShoesCategory
            leftText={t('account.account')}
            fontSize={20}
            marginVertical={10}
          />
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

          <ShoesCategory
            leftText={t('account.appSettings')}
            fontSize={20}
            marginVertical={10}
          />

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
export default AccountTemplate
