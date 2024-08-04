import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { View } from 'tamagui'

import FormInputWithLabel from '~/components/atoms/FormInputWithLabel'
import { PositiveButton } from '~/components/atoms/PositiveButton'
import SafeArea from '~/components/atoms/SafeArea'
import Header from '~/components/molecules/common/Header'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const ForgotPasswordTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  const router = useRouter()

  const handleBack = (): void => {
    router.back()
  }

  return (
    <SafeArea style={{
      ...styles.container,
      backgroundColor: colors.lightSilver
    }}>
      <View marginTop={20}>
        <Header
          leftIcon={
            <AntDesign name="left" size={18}
              color={colors.black}
              onPress={handleBack}/>
          }/>

        <Header
          title={t('forgotPassword.recoveryPassword')}
          fontSize={28}
          fontWeight="bold"/>

        <Header
          textAlign="center"
          marginTop={8}
          title={t('forgotPassword.pleaseEnterYourEmail')}
          fontSize={16}
          color={colors.slateGray}/>
      </View>

      <FormInputWithLabel
        label={t('emailAddress')}
        placeholder={t('enterEmail')}
      />

      <PositiveButton
        title={t('forgotPassword.continue')}
      />

    </SafeArea>
  )
}
export default ForgotPasswordTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    paddingHorizontal: 20
  }
})
