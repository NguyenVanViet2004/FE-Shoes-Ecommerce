import React from 'react'
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native'

interface Colors {
    blue: string
}

interface ProductInfoProps {
    colors: Colors
}

const ProductInfo: React.FC<ProductInfoProps> = ({ colors }) => {
    return (
        <View style={styles.detailsContainer}>
            <Text style={[styles.bestSeller, { color: colors.blue }]}>BEST SELLER</Text>
            <Text style={styles.title}>Nike Air Jordan</Text>
            <Text style={styles.price}>$967.800</Text>
            <Text style={styles.description}>
                Air Jordan là một thương hiệu giày bóng rổ, thể thao, thời trang và
                quần áo phong cách của Mỹ được sản xuất bởi Nike....
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bestSeller: {
        fontSize: 16,
        fontWeight: '500',  // Corrected from 'medium' to '500'
        marginVertical: 8
    } as TextStyle,
    description: {
        fontSize: 16,
        marginVertical: 7
    } as TextStyle,
    detailsContainer: {
        paddingHorizontal: 20
    } as ViewStyle,
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 7
    } as TextStyle,
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 7
    } as TextStyle
})

export default ProductInfo
