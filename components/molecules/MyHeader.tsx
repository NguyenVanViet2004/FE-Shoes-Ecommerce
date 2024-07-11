import React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Badge, Surface, Title, useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Icon from '../atoms/Icons';
import ColorScreen from '../organisms/ColorScreen';
import Colors from '../atoms/Colors';
const IconSize = 24;

type AppHeaderProps = {
	style?: ViewStyle;
	menu?: boolean;
	onPressMenu?: () => void;
	back?: boolean;
	onPressBack?: () => void;
	title: string;
	right?: string;
	rightComponent?: React.ReactNode;
	onRightPress?: () => void;
	optionalBtn?: string;
	optionalBtnPress?: () => void;
	headerBg?: string;
	iconColor?: string;
	titleAlight?: TextStyle['textAlign'];
	optionalBadge?: number;
};

const AppHeader: React.FC<AppHeaderProps> = ({
	style,
	menu,
	onPressMenu,
	back,
	onPressBack,
	title,
	right,
	rightComponent,
	onRightPress,
	optionalBtn,
	optionalBtnPress,
	headerBg,
	iconColor,
	titleAlight,
	optionalBadge,
}) => {
	const { colors, dark } = useTheme();
	const color = dark ? Colors.white : Colors.dark;
	const bgColor = dark ? Colors.dark : Colors.white;
	const backgroundColor = headerBg || colors.background;

	const LeftView: React.FC = () => (
		<View style={styles.view}>
			{menu && (
				<TouchableOpacity onPress={onPressMenu}>
					<Feather name="menu" size={IconSize} color={iconColor || color} />
				</TouchableOpacity>
			)}
			{back && (
				<TouchableOpacity onPress={onPressBack}>
					<Feather name="arrow-left" size={IconSize} color={iconColor || color} />
				</TouchableOpacity>
			)}
		</View>
	);

	const RightView: React.FC = () => (
		rightComponent ? (
			<>{rightComponent}</>
		) : (
			<View style={[styles.view, styles.rightView]}>
				{optionalBtn && (
					<TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
						<Feather name={optionalBtn} size={IconSize} color={iconColor || color} />
						{optionalBadge && (
							<Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>
						)}
					</TouchableOpacity>
				)}
				{right && right !== '' && (
					<TouchableOpacity onPress={onRightPress}>
						<Feather name={right} size={IconSize} color={iconColor || color} />
					</TouchableOpacity>
				)}
			</View>
		)
	);

	const TitleView: React.FC = () => (
		<View style={styles.titleView}>
			<Title style={{ color: iconColor || color, textAlign: titleAlight }}>{title}</Title>
		</View>
	);

	return (
		<Surface style={[styles.header, style, { backgroundColor }]}>
			<LeftView />
			<TitleView />
			<RightView />
		</Surface>
	);
};

export default AppHeader;

const styles = StyleSheet.create({
	header: {
		height: 50,
		elevation: 4,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	view: {
		marginHorizontal: 16,
		alignItems: 'center',
		flexDirection: 'row',
	},
	titleView: {
		flex: 1,
	},
	rightView: {
		justifyContent: 'flex-end',
	},
	rowView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
	},
});
