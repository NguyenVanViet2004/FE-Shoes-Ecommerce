import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle, useColorScheme } from 'react-native'
import getColors from '~/constants/Colors'
interface Colors {
    blue: string
    white: string
    darkGray: string
    black: string
}

interface PriceSectionProps {
    colors: Colors
}
const colors = getColors(useColorScheme())

const PriceSection: React.FC<PriceSectionProps> = ({ colors }) => {
    return (
        <View style={styles.priceContainer}>
            <View>
                <Text style={styles.finalPrice}>Price</Text>
                <Text style={styles.finalPriceValue}>$849.69</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addToCartButton: {
        backgroundColor: colors.blue,
        borderRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    addToCartText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    } as TextStyle,
    finalPrice: {
        color: colors.darkGray,
        fontSize: 16,
    } as TextStyle,
    finalPriceValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 7
    } as TextStyle,
    priceContainer: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 12,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 16,
        shadowColor: colors.black,
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10,
    } as ViewStyle
})

export default PriceSection
