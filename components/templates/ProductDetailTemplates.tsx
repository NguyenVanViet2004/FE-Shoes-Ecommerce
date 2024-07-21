import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList, Dimensions, useColorScheme } from 'react-native';
import getColors from '~/constants/Colors';
import HeaderDetails from '../molecules/HeaderDetails';
const images = [
    require('~/assets/images/shoes1.png'),
    require('~/assets/images/shoes2.png'),
    require('~/assets/images/shoes3.png'),
];
const sizes = ['38', '39', '40', '41', '42', '43'];
const colors = getColors(useColorScheme())
export default function Details() {
    const [selectedSize, setSelectedSize] = useState<string>('40');
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderDetails />
                <View style={styles.imageContainer}>
                    <FlatList
                        data={images}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={({ nativeEvent }) => {
                            const index = Math.round(nativeEvent.contentOffset.x / Dimensions.get('window').width);
                            setCurrentImageIndex(index);
                        }}
                        renderItem={({ item }) => (
                            <Image source={item} style={styles.image} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.dotContainer}>
                    {images.map((_, index) => (
                        <View key={index} style={[styles.dot, { opacity: index === currentImageIndex ? 1 : 0.3 }]} />
                    ))}
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.bestSeller}>BEST SELLER</Text>
                    <Text style={styles.title}>Nike Air Jordan</Text>
                    <Text style={styles.price}>$967.800</Text>
                    <Text style={styles.description}>
                        Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike....
                    </Text>
                    <Text style={styles.galleryText}>Gallery</Text>
                    <View style={styles.galleryContainer}>
                        {images.map((img, index) => (
                            <Image key={index} source={img} style={styles.galleryImage} />
                        ))}
                    </View>
                    <View style={styles.distribute}>
                        <View style={styles.header}>
                            <Text style={styles.titleSize}>Size</Text>
                            <View style={styles.sizeOptions}>
                                <Text style={[styles.sizeOption, styles.activeSizeOption]}>EU</Text>
                                <Text style={styles.sizeOption}>US</Text>
                                <Text style={styles.sizeOption}>UK</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.sizeContainer}>
                        {sizes.map(size => (
                            <TouchableOpacity
                                key={size}
                                style={[styles.sizeButton, { backgroundColor: size === selectedSize ? colors.blue : colors.whiteSmoke }]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text style={[styles.sizeText, { color: size === selectedSize ? colors.whiteSmoke : colors.black }]}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View >
                    <View style={styles.priceContainer}>
                        <View >
                            <Text style={styles.finalPrice}>Price</Text>
                            <Text style={styles.finalPriceValue}>$849.69</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.addToCartButton}>
                                <Text style={styles.addToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.bestSeller}>BEST SELLER</Text>
                    <Text style={styles.title}>Nike Air Jordan</Text>
                    <Text style={styles.price}>$967.800</Text>
                    <Text style={styles.description}>
                        Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike....
                    </Text>
                    <Text style={styles.galleryText}>Gallery</Text>
                    <View style={styles.galleryContainer}>
                        {images.map((img, index) => (
                            <Image key={index} source={img} style={styles.galleryImage} />
                        ))}
                    </View>
                    <Text style={styles.sizeText}>Size</Text>
                    <View style={styles.sizeContainer}>
                        {sizes.map(size => (
                            <TouchableOpacity
                                key={size}
                                style={[styles.sizeButton, { backgroundColor: size === selectedSize ? colors.blue : colors.whiteSmoke }]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text style={[styles.sizeText, { color: size === selectedSize ? colors.whiteSmoke : colors.black }]}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View >
                    <View style={styles.priceContainer}>
                        <View >
                            <Text style={styles.finalPrice}>Price</Text>
                            <Text style={styles.finalPriceValue}>$849.69</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.addToCartButton}>
                                <Text style={styles.addToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageContainer: {
        height: 300,
        backgroundColor: colors.whiteSmoke
    },
    image: {
        width: Dimensions.get('window').width,
        height: 300,
        resizeMode: 'cover',
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    dot: {
        height: 8,
        width: 8,
        backgroundColor: colors.darkGray,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    detailsContainer: {
        paddingHorizontal: 20,
    },
    bestSeller: {
        color: colors.blue,
        fontWeight: 'medium',
        fontSize: 16,
        marginVertical: 8,
    },
    title: {
        fontSize: 24,
        marginVertical: 7,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        marginVertical: 7,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: colors.darkGray2,
        marginVertical: 7,
    },
    galleryText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 7,
    },
    galleryContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
    },
    galleryImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.whiteSmoke,

    },
    distribute: {
        paddingVertical: 16,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleSize: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
    },
    sizeOptions: {
        flexDirection: 'row',
    },
    sizeOption: {
        marginHorizontal: 8,
        fontSize: 16,
        color: colors.darkGray,
    },
    activeSizeOption: {
        fontWeight: 'bold',
        color: colors.black,
    },
    divider: {
        borderBottomColor: colors.blue,
        borderStyle: 'dotted',
        marginTop: 8,
    },
    sizeText: {
        fontSize: 16,
        marginVertical: 7,
        fontWeight: 'medium',
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sizeButton: {
        borderColor: colors.whiteSmoke,
        borderRadius: 50,
        width: 40,
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: colors.whiteSmoke,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    finalPrice: {
        color: colors.darkGray,
        fontSize: 16,
    },
    finalPriceValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 7,
    },
    addToCartButton: {
        backgroundColor: colors.blue,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,

    },
    addToCartText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: colors.white,
        borderRadius: 12,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        marginTop: 20
    },
    priceValueContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '70%',
        paddingHorizontal: 10,
    }
});
