import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList, Dimensions, useColorScheme } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '~/components/molecules/common/Header'
import { Button } from 'tamagui';
import { t } from 'i18next';
import getColors from '~/constants/Colors';
const images = [
    require('~/assets/images/shoes1.png'),
    require('~/assets/images/shoes2.png'),
    require('~/assets/images/shoes3.png'),
];
const sizes = ['38', '39', '40', '41', '42', '43'];
const colors = getColors(useColorScheme())
export default function Details() {
    const [selectedSize, setSelectedSize] = useState('40');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView>
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
                    <Text style={styles.sizeText}>Size</Text>
                    <View style={styles.sizeContainer}>
                        {sizes.map(size => (
                            <TouchableOpacity
                                key={size}
                                style={[styles.sizeButton, { backgroundColor: size === selectedSize ? '#5b9ee1' : '#f8f9fa' }]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text style={[styles.sizeText, { color: size === selectedSize ? '#f8f9fa' : '#000' }]}>{size}</Text>
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
                                style={[styles.sizeButton, { backgroundColor: size === selectedSize ? '#5b9ee1' : '#f8f9fa' }]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text style={[styles.sizeText, { color: size === selectedSize ? '#f8f9fa' : '#000' }]}>{size}</Text>
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
        backgroundColor: '#FFF',
    },
    imageContainer: {
        height: 300,
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
        backgroundColor: 'silver',
        borderRadius: 4,
        marginHorizontal: 4,
    },
    detailsContainer: {
        paddingHorizontal: 20,
    },
    bestSeller: {
        color: '#007BFF',
        fontWeight: 'medium',
        fontSize: 16,
        marginVertical: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'medium',
        marginVertical: 7,
    },
    price: {
        fontSize: 20,
        marginVertical: 7,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginVertical: 7,
    },
    galleryText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 7,
    },
    galleryContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        gap: 10
    },
    galleryImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#f8f9fa',

    },
    sizeText: {
        fontSize: 16,
        marginVertical: 7,
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sizeButton: {
        borderColor: 'silver',
        borderRadius: 50,
        width: 40,
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: "#f8f9fa",
    },
    finalPrice: {
        color: '#6b6b6b',
        fontSize: 16,
    },
    finalPriceValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 7,
    },
    addToCartButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
        marginRight: 20
    },
    addToCartText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    priceValueContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '70%',
        paddingHorizontal: 10,
    }
});
