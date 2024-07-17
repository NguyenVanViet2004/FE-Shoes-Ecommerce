import React from 'react'
import { type StyleProp, type ViewStyle } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Foundation from '@expo/vector-icons/Foundation'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'

export const Icons = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons
}
type IntrinsicAttributes = /* unresolved */ any
export interface IconProps {
  type: IntrinsicAttributes & IconProps
  name: string
  color?: string
  size?: number
  style?: StyleProp<ViewStyle>
}

const Icon: React.FC<IconProps> =
  ({ type, name, color, size = 24, style }): JSX.Element | null => {
    if (typeof type === 'function' &&
      typeof name === 'string' &&
      name.length > 0) {
      const Tag = type
      return (
        <Tag
          name={name}
          size={size}
          color={color}
          style={style}
        />
      )
    }
    return null
  }

export default Icon
