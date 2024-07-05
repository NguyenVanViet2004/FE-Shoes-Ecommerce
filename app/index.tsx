import { Text } from 'tamagui'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text textAlign='center' color={'red'} fontSize={20} fontWeight={'bold'}>FE Shoe Ecommerce</Text>
    </SafeAreaView>
  )
}

export default index