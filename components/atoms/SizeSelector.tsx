import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle, useColorScheme } from 'react-native'
import getColors from '~/constants/Colors'
interface Colors {
    blue: string
    whiteSmoke: string
    black: string
    darkGray: string
}
const colors = getColors(useColorScheme())

interface SizeSelectorProps {
    sizes: string[]
    selectedSize: string
    setSelectedSize: (size: string) => void
    colors: Colors
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, setSelectedSize, colors }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleSize}>Size</Text>
                <View style={styles.sizeOptions}>
                    <Text style={[styles.sizeOption, styles.activeSizeOption]}>
                        EU
                    </Text>
                    <Text style={styles.sizeOption}>US</Text>
                    <Text style={styles.sizeOption}>UK</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.sizeContainer}>
                {sizes.map((size) => (
                    <TouchableOpacity
                        key={size}
                        style={[
                            styles.sizeButton,
                            {
                                backgroundColor: size === selectedSize
                                    ? colors.blue
                                    : colors.whiteSmoke
                            }
                        ]}
                        onPress={() => setSelectedSize(size)}
                    >
                        <Text
                            style={[
                                styles.sizeText,
                                {
                                    color: size === selectedSize
                                        ? colors.whiteSmoke
                                        : colors.black
                                }
                            ]}
                        >
                            {size}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18
    },
    divider: {
        borderBottomColor: 'blue', // Temporarily using a string value, will update in runtime.
        borderStyle: 'dotted',
        marginTop: 8
    } as TextStyle,
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    } as ViewStyle,
    sizeButton: {
        alignItems: 'center',
        borderColor: 'whiteSmoke', // Temporarily using a string value, will update in runtime.
        borderRadius: 50,
        elevation: 3,
        marginVertical: 10,
        shadowColor: 'black', // Temporarily using a string value, will update in runtime.
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        width: 40
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    } as ViewStyle,
    activeSizeOption: {
        color: colors.black,
        fontWeight: 'bold'
    },
    sizeOption: {
        color: 'darkGray', // Temporarily using a string value, will update in runtime.
        fontSize: 16,
        marginHorizontal: 8
    } as TextStyle,
    sizeOptions: {
        flexDirection: 'row'
    } as ViewStyle,
    sizeText: {
        fontSize: 16,
        fontWeight: '500',  // Corrected from 'medium' to '500'
        marginVertical: 7
    } as TextStyle,
    titleSize: {
        color: 'black', // Temporarily using a string value, will update in runtime.
        fontSize: 18,
        fontWeight: 'bold'
    } as TextStyle
})

export default SizeSelector
