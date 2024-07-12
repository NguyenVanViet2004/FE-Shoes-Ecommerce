import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'tamagui'
import BottomTabBar from '~/components/template/BottomTab'

const index = (): JSX.Element => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Text
    //     textAlign="center"
    //     color={'red'} fontSize={20}
    //     fontWeight={'bold'}>FE Shoe Ecommerce</Text>
    // </SafeAreaView>
    <BottomTabBar />
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
