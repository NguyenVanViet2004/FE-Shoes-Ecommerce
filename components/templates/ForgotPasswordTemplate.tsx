import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'

import FormInputWithLabel from '~/components/atoms/FormInputWithLabel'
import { PositiveButton } from '~/components/atoms/PositiveButton'
import SafeArea from '~/components/atoms/SafeArea'
import Header from '~/components/molecules/common/Header'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const ForgotPasswordTemplate: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')

  useEffect((): void => {
    const emailError = isValidEmail(email) ? '' : t('invalidEmail')
    setEmailError(emailError)
  }, [email])

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

      <Header
        title={t('forgotPassword.recoveryPassword')}
        subtitle={t('forgotPassword.pleaseEnterYourEmail')}
        backIcon={
          <AntDesign name="left" size={18}
            color={colors.black} onPress={handleBack}/>
        } />

      <FormInputWithLabel
        onChangeText={setEmail}
        label={t('emailAddress')}
        placeholder={t('enterEmail')}
        errorMessage={emailError}
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
