import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { View } from 'tamagui'

import SafeArea from '~/components/atoms/SafeArea'
import FooterComponent from '~/components/molecules/common/Footer'
import Header from '~/components/molecules/common/Header'
import InputForm from '~/components/molecules/InputForm'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const SignInTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  const router = useRouter()

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

      <View marginTop={20}>
        <Header
          leftIcon={
            <AntDesign name="left" size={18}
              color={colors.black}
              onPress={handleBack}/>
          }/>

        <Header
          title={t('signIn.helloAgain')}
          fontSize={28}
          fontWeight="bold"
        />

        <Header
          marginTop={8}
          title={t('signIn.welcomeBackYouHaveBeenMissed')}
          fontSize={16}
          color={colors.slateGray}
        />
      </View>

      <InputForm
        visibleRecoveryPassword={true}
        visibleFormInputWithLabel={false}
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
