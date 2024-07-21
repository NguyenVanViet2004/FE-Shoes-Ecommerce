import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
const HeaderDetails: React.FC = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton}>
                <Entypo name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Men’s Shoes</Text>
            <TouchableOpacity style={styles.iconButton}>
                <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default HeaderDetails;