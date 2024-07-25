import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { ScrollView, Text, View } from 'tamagui'

import Header from '~/components/molecules/common/Header'
import getColors from '~/constants/Colors'

import SafeArea from '../atoms/SafeArea'
import { ChooseMethod } from '../molecules/ChooseMethod'
const AccountScreen: React.FC = () => {
  const colors = getColors(useColorScheme())
  return (
    <SafeArea style={styles.container}>
      <ScrollView>
        <View
          flex={1}
          paddingBottom={120}
          paddingHorizontal={20}
          backgroundColor={colors.lightSilver}>
          <Header
            leftIcon={
              <AntDesign name="left" size={15} color={colors.midnightBlue} />}
            label="Account & Settings" />

          <Text
            fontSize={18}
            fontWeight={500}
            marginVertical={24}>Account</Text>

          <ChooseMethod
            leftIcon={<MaterialCommunityIcons
              name="bell-ring-outline"
              size={24}
              color={colors.slateGray} />}
            rightIcon={<AntDesign
              name="right"
              size={15}
              color={colors.slateGray} />}
            nameMethod="notificationSetting" />

          <ChooseMethod
            leftIcon={<Ionicons
              name="bag-handle-outline"
              size={24}
              color={colors.slateGray} />}
            rightIcon={<AntDesign
              name="right"
              size={15}
              color={colors.slateGray} />}
            nameMethod="shippingAddress" />

          <ChooseMethod
            leftIcon={<AntDesign
              name="wallet"
              size={24}
              color={colors.slateGray} />}
            rightIcon={<AntDesign
              name="right"
              size={15}
              color={colors.slateGray} />}
            nameMethod="paymentInfo" />

          <ChooseMethod
            leftIcon={<AntDesign
              name="delete"
              size={24}
              color={colors.slateGray} />}
            rightIcon={<AntDesign
              name="right"
              size={15}
              color={colors.slateGray} />}
            nameMethod="deleteAccount" />

          <Text
            fontSize={18}
            fontWeight={500}
            marginVertical={24}>App Settings</Text>

          <ChooseMethod nameMethod="eneble-FaceID-For-LogIn" useSwitch />

          <ChooseMethod nameMethod="eneblePushNotifications" useSwitch />

          <ChooseMethod nameMethod="enebleLocationServices" useSwitch />

          <ChooseMethod nameMethod="darkMode" useSwitch />
        </View>
      </ScrollView>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default AccountScreen
