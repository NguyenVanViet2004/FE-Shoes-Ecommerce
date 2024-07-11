

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import Icon, { Icons } from '../atoms/Icons';
import Colors from '../atoms/Colors';
import ColorScreen from '../organisms/ColorScreen';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Favourite from './FavouriteScreen';
import OderScreen from './OderScreen';
import NotificationScreen from './NotificationScreen';
import AccountScreen from './AccountScreen';

// Định nghĩa kiểu cho các mục trong mảng Tab
type TabItem = {
    route: string;
    label: string;
    type: keyof typeof Icons;
    icon: string;
    component: React.ComponentType<any>;
};

const TabArr: TabItem[] = [
    { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: HomeScreen },
    { route: 'Favourite', label: 'Favourite', type: Icons.Feather, icon: 'heart', component: Favourite },
    { route: 'Oder', label: 'Oder', type: Icons.Feather, icon: 'shopping-cart', component: OderScreen },
    { route: 'Notifications', label: 'Notifications', type: Icons.MaterialIcons, icon: 'notifications-none', component: NotificationScreen },
    { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: AccountScreen },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: 0.5, translateY: 7 }, 0.92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } };
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } };

const circle1 = { 0: { scale: 0 }, 0.3: { scale: 0.9 }, 0.5: { scale: 0.2 }, 0.8: { scale: 0.7 }, 1: { scale: 1 } };
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

type TabButtonProps = BottomTabBarButtonProps & {
    item: TabItem;
};

const TabButton: React.FC<TabButtonProps> = ({ item, onPress, accessibilityState }) => {
    const focused = accessibilityState?.selected || false;
    const viewRef = useRef<any>(null);
    const circleRef = useRef<any>(null);
    const textRef = useRef<any>(null);
    const isDarkMode = useColorScheme() === 'dark';

    const { colors } = useTheme();
    const color = isDarkMode ? Colors.white : Colors.black;
    const bgColor = colors.background;

    useEffect(() => {
        if (focused) {
            viewRef.current?.animate(animate1);
            circleRef.current?.animate(circle1);
            textRef.current?.transitionTo({ scale: 1 });
        } else {
            viewRef.current?.animate(animate2);
            circleRef.current?.animate(circle2);
            textRef.current?.transitionTo({ scale: 0 });
        }
    }, [focused]);

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
            <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
                <View style={[styles.btn, { borderColor: bgColor, backgroundColor: bgColor }]}>
                    <Animatable.View ref={circleRef} style={styles.circle} />
                    <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
                </View>
                <Animatable.Text ref={textRef} style={[styles.text, { color }]}>
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    );
};

const BottomTabBar: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                {TabArr.map((item, index) => (
                    <Tab.Screen
                        key={index}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />,
                        }}
                    />
                ))}
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        margin: 16,
        borderRadius: 16,
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: Colors.white,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 25,
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: '500',
    },
});

export default BottomTabBar;