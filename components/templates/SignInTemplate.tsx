import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'

import { NegativeButton } from '~/components/atoms/NegativeButton'
import SafeArea from '~/components/atoms/SafeArea'
import FooterComponent from '~/components/molecules/common/Footer'
import Header from '~/components/molecules/common/Header'
import InputForm from '~/components/molecules/InputForm'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'



const SignInTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())

  const handleBack = (): void => {
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: colors.lightSilver
    }
  })

  return (
    <SafeArea style={styles.container}>
      <Header
        title={t('SignIn.helloAgain')}
        subtitle={t('SignIn.welcomeBackYouveBeenMissed')}
        leftIcon={
          <NegativeButton
            icon={<AntDesign name="left" size={18} color={colors.black} />}
            width={44}
            height={44}
            padding={0}
            backgroundColor={colors.white}
            onPress={handleBack} />
        } />

      <InputForm />

      <FooterComponent
        title={t('SignIn.dontHaveAnAccount')}
        subtitle={t('SignIn.signUpForFree')} />

    </SafeArea>
  )
}
export default SignInTemplate
