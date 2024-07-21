// import React, { useState } from 'react'
// import {
//   Dimensions,
//   FlatList,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   useColorScheme,
//   View
// } from 'react-native'

// import getColors from '~/constants/Colors'

// import HeaderDetails from '../molecules/HeaderDetails'

// const images = [
//   require('~/assets/images/shoes1.png'),
//   require('~/assets/images/shoes2.png'),
//   require('~/assets/images/shoes3.png')
// ]
// const sizes = ['38', '39', '40', '41', '42', '43']
// const colors = getColors(useColorScheme())

// const Details: React.FC = (): JSX.Element => {
//   const [selectedSize, setSelectedSize] = useState<string>('40')
//   const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <HeaderDetails />
//         <View style={styles.imageContainer}>
//           <FlatList
//             data={images}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             onScroll={({ nativeEvent }) => {
//               const index = Math.round(
//                 nativeEvent.contentOffset.x / Dimensions.get('window').width
//               )
//               setCurrentImageIndex(index)
//             }}
//             renderItem={({ item }) => (
//               <Image source={item} style={styles.image} />
//             )}
//             keyExtractor={(item, index) => index.toString()}
//           />
//         </View>
//         <View style={styles.dotContainer}>
//           {images.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.dot,
//                 index === currentImageIndex && styles.activeDot
//               ]}
//             />
//           ))}
//         </View>
//         <View style={styles.detailsContainer}>
//           <Text style={styles.bestSeller}>BEST SELLER</Text>
//           <Text style={styles.title}>Nike Air Jordan</Text>
//           <Text style={styles.price}>$967.800</Text>
//           <Text style={styles.description}>
//             Air Jordan là một thương hiệu giày bóng rổ, thể thao, thời trang và
//             quần áo phong cách của Mỹ được sản xuất bởi Nike....
//           </Text>
//           <Text style={styles.galleryText}>Gallery</Text>
//           <View style={styles.galleryContainer}>
//             {images.map((img, index) => (
//               <Image key={index} source={img} style={styles.galleryImage} />
//             ))}
//           </View>
//           <View style={styles.distribute}>
//             <View style={styles.header}>
//               <Text style={styles.titleSize}>Size</Text>
//               <View style={styles.sizeOptions}>
//                 <Text style={[styles.sizeOption, styles.activeSizeOption]}>
//                   EU
//                 </Text>
//                 <Text style={styles.sizeOption}>US</Text>
//                 <Text style={styles.sizeOption}>UK</Text>
//               </View>
//             </View>
//             <View style={styles.divider} />
//           </View>
//           <View style={styles.sizeContainer}>
//             {sizes.map((size) => (
//               <TouchableOpacity
//                 key={size}
//                 style={[
//                   styles.sizeButton,
//                   {
//                     backgroundColor: size === selectedSize
//                       ? colors.blue
//                       : colors.whiteSmoke
//                   }
//                 ]}
//                 onPress={() => {
//                   setSelectedSize(size)
//                 }}
//               >
//                 <Text
//                   style={[
//                     styles.sizeText,
//                     {
//                       color: size === selectedSize
//                         ? colors.whiteSmoke
//                         : colors.black
//                     }
//                   ]}
//                 >
//                   {size}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <View style={styles.priceContainer}>
//             <View>
//               <Text style={styles.finalPrice}>Price</Text>
//               <Text style={styles.finalPriceValue}>$849.69</Text>
//             </View>
//             <View>
//               <TouchableOpacity style={styles.addToCartButton}>
//                 <Text style={styles.addToCartText}>Add To Cart</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   )
// }

// export default Details

// const styles = StyleSheet.create({
//   activeDot: {
//     opacity: 1
//   },
//   activeSizeOption: {
//     color: colors.black,
//     fontWeight: 'bold'
//   },
//   addToCartButton: {
//     backgroundColor: colors.blue,
//     borderRadius: 24,
//     paddingHorizontal: 24,
//     paddingVertical: 12
//   },
//   addToCartText: {
//     color: colors.white,
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   bestSeller: {
//     color: colors.blue,
//     fontSize: 16,
//     fontWeight: 'medium',
//     marginVertical: 8
//   },
//   container: {
//     backgroundColor: colors.white,
//     flex: 1
//   },
//   description: {
//     color: colors.darkGray2,
//     fontSize: 16,
//     marginVertical: 7
//   },
//   detailsContainer: {
//     paddingHorizontal: 20
//   },
//   distribute: {
//     backgroundColor: colors.white,
//     paddingVertical: 16
//   },
//   divider: {
//     borderBottomColor: colors.blue,
//     borderStyle: 'dotted',
//     marginTop: 8
//   },
//   dot: {
//     backgroundColor: colors.darkGray,
//     borderRadius: 4,
//     height: 8,
//     marginHorizontal: 4,
//     opacity: 0.3,
//     width: 8
//   },
//   dotContainer: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 8
//   },
//   finalPrice: {
//     color: colors.darkGray,
//     fontSize: 16
//   },
//   finalPriceValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 7
//   },
//   galleryContainer: {
//     flexDirection: 'row',
//     gap: 10,
//     justifyContent: 'flex-start'
//   },
//   galleryImage: {
//     backgroundColor: colors.whiteSmoke,
//     borderRadius: 10,
//     borderWidth: 1,
//     height: 60,
//     width: 60
//   },
//   galleryText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 7
//   },
//   header: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   image: {
//     height: 300,
//     resizeMode: 'cover',
//     width: Dimensions.get('window').width
//   },
//   imageContainer: {
//     backgroundColor: colors.whiteSmoke,
//     height: 300
//   },
//   price: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 7
//   },
//   priceContainer: {
//     alignItems: 'center',
//     backgroundColor: colors.white,
//     borderRadius: 12,
//     elevation: 3,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//     padding: 16,
//     shadowColor: colors.black,
//     shadowOffset: { height: 2, width: 0 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8
//   },
//   sizeButton: {
//     alignItems: 'center',
//     backgroundColor: colors.whiteSmoke,
//     borderColor: colors.whiteSmoke,
//     borderRadius: 50,
//     elevation: 3,
//     marginVertical: 10,
//     shadowColor: colors.black,
//     shadowOffset: { height: 2, width: 0 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     width: 40
//   },
//   sizeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   sizeOption: {
//     color: colors.darkGray,
//     fontSize: 16,
//     marginHorizontal: 8
//   },
//   sizeOptions: {
//     flexDirection: 'row'
//   },
//   sizeText: {
//     fontSize: 16,
//     fontWeight: 'medium',
//     marginVertical: 7
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 7
//   },
//   titleSize: {
//     color: colors.black,
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// })
import React, { useState } from 'react'
import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native'
import getColors from '~/constants/Colors'

import HeaderDetails from '../molecules/HeaderDetails'
import ImageCarousel from '~/components/atoms/ImageCarousel'
import DotsIndicator from '~/components/atoms/DotsIndicator'
import ProductInfo from '~/components/atoms/ProductInfo'
import Gallery from '~/components/atoms/Gallery'
import SizeSelector from '~/components/atoms/SizeSelector'
import PriceSection from '~/components/atoms/PriceSection'

const images = [
    require('~/assets/images/shoes1.png'),
    require('~/assets/images/shoes2.png'),
    require('~/assets/images/shoes3.png')
]
const sizes = ['38', '39', '40', '41', '42', '43']
const colors = getColors(useColorScheme())

const Details: React.FC = (): JSX.Element => {
    const [selectedSize, setSelectedSize] = useState<string>('40')
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderDetails />
                <ImageCarousel images={images} setCurrentImageIndex={setCurrentImageIndex} />
                <DotsIndicator images={images} currentImageIndex={currentImageIndex} colors={colors} />
                <ProductInfo colors={colors} />
                <Gallery images={images} colors={colors} />
                <SizeSelector sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} colors={colors} />
                <PriceSection colors={colors} />
            </ScrollView>
            <ScrollView>
                <SizeSelector sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} colors={colors} />
                <PriceSection colors={colors} />
            </ScrollView>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    }
})