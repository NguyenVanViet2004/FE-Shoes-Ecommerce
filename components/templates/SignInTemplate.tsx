import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'

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

      <InputForm />

      <FooterComponent
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
