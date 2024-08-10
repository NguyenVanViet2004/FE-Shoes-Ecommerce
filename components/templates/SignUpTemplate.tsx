import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'

import SafeArea from '~/components/atoms/SafeArea'
import FooterComponent from '~/components/molecules/common/Footer'
import Header from '~/components/molecules/common/Header'
import InputForm from '~/components/molecules/InputForm'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidPassword = (password: string): boolean => {
  const minLength = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  return password.length >= minLength &&
  hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
}

const SignUpTemplate: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('')

  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  const router = useRouter()

  useEffect((): void => {
    const emailError = isValidEmail(email) ? '' : t('invalidEmail')
    const passwordError = isValidPassword(password) ? '' : t('invalidPassword')
    const confirmPasswordError = password === confirmPassword
      ? ''
      : t('passwordsDoNotMatch')

    setEmailError(emailError)
    setPasswordError(passwordError)
    setConfirmPasswordError(confirmPasswordError)
  }, [email, password, confirmPassword, t])

  const handleBack = (): void => {
    router.back()
  }
  const redirectToSignIn = (): void => {
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
        backIcon={
          <AntDesign name="left" size={18}
            color={colors.black} onPress={handleBack}/>
        } />

      <InputForm
        visibleFormInputWithLabel={true}
        visibleRecoveryPassword={false}
        onChangeEmailText={setEmail}
        onChangePasswordText={setPassword}
        onChangeConfirmPasswordText={setConfirmPassword}
        buttonTitle={t('signUp.signUp')}
        googleButtonTitle={t('signUp.signInWithGoogle')}
        emailError={emailError}
        passwordError={passwordError}
        confirmPasswordError={confirmPasswordError}
      />

      <FooterComponent
        onPressAuthScreen={redirectToSignIn}
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
