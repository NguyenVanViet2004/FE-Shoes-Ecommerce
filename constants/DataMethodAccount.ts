interface DataMethodAccount {
  id: string
  nameMethod: string
  leftIconType: 'MaterialCommunityIcons' | 'AntDesign' | 'Ionicons'
  leftIconName: string
  rightIconType: 'MaterialCommunityIcons' | 'AntDesign' | 'Ionicons'
  rightIconName: string
}

const dataMethodAccount: DataMethodAccount[] = [
  {
    id: '1',
    leftIconName: 'bell-ring-outline',
    leftIconType: 'MaterialCommunityIcons',
    nameMethod: 'notificationSetting',
    rightIconName: 'right',
    rightIconType: 'AntDesign'
  },
  {
    id: '2',
    leftIconName: 'bag-handle-outline',
    leftIconType: 'Ionicons',
    nameMethod: 'shippingAddress',
    rightIconName: 'right',
    rightIconType: 'AntDesign'
  },
  {
    id: '3',
    leftIconName: 'wallet',
    leftIconType: 'AntDesign',
    nameMethod: 'paymentInfo',
    rightIconName: 'right',
    rightIconType: 'AntDesign'
  },
  {
    id: '4',
    leftIconName: 'delete',
    leftIconType: 'AntDesign',
    nameMethod: 'deleteAccount',
    rightIconName: 'right',
    rightIconType: 'AntDesign'
  }
]

export default dataMethodAccount
