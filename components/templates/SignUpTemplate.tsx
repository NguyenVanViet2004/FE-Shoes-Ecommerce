import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'

import SafeArea from '~/components/atoms/SafeArea'
import FooterComponent from '~/components/molecules/common/Footer'
import Header from '~/components/molecules/common/Header'
import InputForm from '~/components/molecules/InputForm'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const SignUpTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  const router = useRouter()

  const handleBack = (): void => {
    router.back()
  }
  const handleSignIn = (): void => {
    router.push('/authentication/SignIn')
  }

  return (
    <SafeArea style={{
      ...styles.container,
      backgroundColor: colors.lightSilver
    }}>
      <Header
        title={t('signUp.createAccount')}
        subtitle={t('signUp.letsCreateAccountTogether')}
        leftIcon={
          <AntDesign name="left" size={18}
            color={colors.black}
            onPress={handleBack} />
        }
      />

      <InputForm
        recoveryPassword={'none'}
        titleButton={t('signUp.signUp')}
        titleButtonGoogle={t('signUp.signInWithGoogle')} />

      <FooterComponent
        onPress={handleSignIn}
        title={t('signUp.alreadyHaveAnAccount')}
        subtitle={t('signUp.signIn')} />

    </SafeArea>
  )
}
export default SignUpTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
})
