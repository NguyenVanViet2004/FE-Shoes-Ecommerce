import React from 'react'
import { Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native'

interface GalleryProps {
    images: ImageSourcePropType[]
    colors: {
        primary: string
        secondary: string
    }
}

const Gallery: React.FC<GalleryProps> = ({ images, colors }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.galleryText}>Gallery</Text>
            <View style={styles.galleryContainer}>
                {images.map((img, index) => (
                    <Image key={index} source={img} style={styles.galleryImage} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18
    },
    galleryContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-start'
    },
    galleryImage: {
        borderRadius: 10,
        borderWidth: 1,
        height: 60,
        width: 60
    },
    galleryText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 7
    }
})

export default Gallery
