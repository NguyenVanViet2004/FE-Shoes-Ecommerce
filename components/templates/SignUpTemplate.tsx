import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { Button } from 'tamagui'

import SafeArea from '~/components/atoms/SafeArea'
import FooterComponent from '~/components/molecules/common/Footer'
import Header from '~/components/molecules/common/Header'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'
import InputForm from '~/components/molecules/InputForm';

const SignUpTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  const router = useRouter()

  const handleBack = (): void => {
    router.back()
  }
  const handleSignIn = (): void => {
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
          <Button
            unstyled
            onPress={handleBack}
            padding={10}
            borderRadius={50}
            backgroundColor={colors.white}
            alignSelf="baseline">
            <AntDesign name="left" size={18}
              color={colors.black} />
          </Button>
        } />

      <InputForm
        displayProp={'none'}
        titleButton={t('signUp.signUp')}
        titleButtonGoogle={t('signUp.signInWithGoogle')} />

      <FooterComponent
        onPress={handleSignIn}
        title={t('Already have an account?')}
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
