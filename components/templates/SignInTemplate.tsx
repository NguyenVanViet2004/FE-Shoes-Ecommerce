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

const SignInTemplate: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  const router = useRouter()

  useEffect((): void => {
  }, [email, password])

  const handleBack = (): void => {
    router.back()
  }

  const redirectToSignUp = (): void => {
    router.push('/authentication/SignUp')
  }

  const redirectToForgot = (): void => {
  }

  const ButtonSignin = (): void => {
    router.replace('/BottomBar')
  }
  return (
    <SafeArea style={{
      ...styles.container,
      backgroundColor: colors.lightSilver
    }}>

      <Header
        title={t('signIn.helloAgain')}
        subtitle={t('signIn.welcomeBackYouHaveBeenMissed')}
        backIcon={
          <AntDesign name="left" size={18}
            color={colors.black} onPress={handleBack}/>
        } />

      <InputForm
        visibleRecoveryPassword={true}
        visibleFormInputWithLabel={false}
        onChangeEmailText={setEmail}
        onChangePasswordText={setPassword}
        onLoginPress={ButtonSignin}
        onRecoveryPasswordPress={redirectToForgot}
        buttonTitle={t('signIn.signIn')}
        googleButtonTitle={t('signIn.signInWithGoogle')}/>

      <FooterComponent
        onPressAuthScreen={redirectToSignUp}
        title={t('signIn.doNotHaveAnAccount')}
        subtitle={t('signIn.signUpForFree')} />

    </SafeArea>
  )
}
export default SignInTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
})
