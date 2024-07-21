import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

interface ImageCarouselProps {
    images: { uri: string }[]
    setCurrentImageIndex: (index: number) => void
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, setCurrentImageIndex }) => {
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width
        )
        setCurrentImageIndex(index)
    }

    return (
        <View style={styles.imageContainer}>
            <FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.uri }} style={styles.image} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        resizeMode: 'cover',
        width: Dimensions.get('window').width
    },
    imageContainer: {
        height: 300
    }
})

export default ImageCarousel
