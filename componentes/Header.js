import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Alert, TextInput } from 'react-native';


const Header = () => {
    return (
        <View style={styles.logoContainer}>
            <TouchableOpacity onPress={() => console.log('Menu clicado')} style={styles.menuContainer}>
                <Image source={require('../Img/Icones/menu.png')} style={styles.menu} />
            </TouchableOpacity>

            <Image source={require('../Img/Logo/LogoP.png')} style={styles.logo} />

            <TouchableOpacity onPress={() => console.log('Configurações clicadas')} style={styles.configContainer}>
                <Image source={require('../Img/Icones/config.png')} style={styles.config} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    //Logo Fuel
    logoContainer: {
        width: '100%',
        height: '13%',
        backgroundColor: '#00052F',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: '45%',
        height: '350%',
        resizeMode: 'center',
        alignItems: 'center',
    },

    //Icone Menu
    menuContainer: {
        marginLeft: 15,
    },

    menu: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    //Icone Configurações
    configContainer: {
        marginRight: 15,
    },

    config: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },   
    
});

export default Header;