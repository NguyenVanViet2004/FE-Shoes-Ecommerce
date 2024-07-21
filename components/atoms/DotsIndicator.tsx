import React from 'react'
import { StyleSheet, View } from 'react-native'

interface DotsIndicatorProps {
    images: { uri: string }[]
    currentImageIndex: number
    colors: {
        active: string
        inactive: string
    }
}

const DotsIndicator: React.FC<DotsIndicatorProps> = ({ images, currentImageIndex, colors }) => {
    return (
        <View style={styles.dotContainer}>
            {images.map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        { backgroundColor: index === currentImageIndex ? colors.active : colors.inactive },
                        index === currentImageIndex && { opacity: 1 }
                    ]}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        borderRadius: 4,
        height: 8,
        marginHorizontal: 4,
        opacity: 0.3,
        width: 8
    },
    dotContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8
    }
})

export default DotsIndicator
