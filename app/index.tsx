import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import SignInTemplate from '~/components/templates/SignInTemplate'

const index = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <SignInTemplate/>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
