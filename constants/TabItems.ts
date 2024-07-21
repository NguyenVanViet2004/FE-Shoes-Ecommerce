import { Icons } from '~/components/atoms/Icons'
import AccountScreen from '~/components/templates/AccountTemplate'
import Favorite from '~/components/templates/FavoriteTemplate'
import HomeScreen from '~/components/templates/HomeTemplate'
import NotificationScreen from '~/components/templates/NotificationTemplate'
import OderScreen from '~/components/templates/OderTemplate'

export interface TabItem {
  route: string
  label: string
  type: any
  icon: string
  component: React.ComponentType<any>
}

const TabItems: TabItem[] = [
  {
    component: HomeScreen,
    icon: 'home',
    label: 'Home',
    route: 'Home',
    type: Icons.AntDesign
  },
  {
    component: Favorite,
    icon: 'heart',
    label: 'Favorite',
    route: 'Favorite',
    type: Icons.Feather
  },
  {
    component: OderScreen,
    icon: 'shopping-cart',
    label: 'Oder',
    route: 'Oder',
    type: Icons.Feather
  },
  {
    component: NotificationScreen,
    icon: 'notifications-none',
    label: 'Notify',
    route: 'Notifications',
    type: Icons.MaterialIcons
  },
  {
    component: AccountTemplate,
    icon: 'user-circle-o',
    label: 'Account',
    route: 'Account',
    type: Icons.FontAwesome
  }
]

export default TabItems
