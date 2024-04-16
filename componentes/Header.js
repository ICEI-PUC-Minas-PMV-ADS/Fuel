import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Alert, TextInput } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00052F',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        height: windowHeight * 0.14, // Ajuste a altura conforme necessário
    },
    //Logo Fuel
    
    logo: {
        width: windowWidth * 0.45, // Utilizando 45% da largura da tela
        height: '160%', // Ajustando a altura para preencher o contêiner
        resizeMode: 'contain',
        marginTop: '12%',
        justifyContent: 'space-between',
        alignContent: 'center',
       

     
        
        
    },

    
    //Icone Menu
    menuContainer: {
        marginLeft: windowWidth * 0, // Ajuste dinâmico da margem esquerda
    },
    menu: {
        width: windowWidth * 0.06, // Utilizando 7% da largura da tela
        height: windowHeight * 0.04, // Utilizando 5% da altura da tela
        resizeMode: 'contain',
        marginTop: (windowHeight * 0.14 - windowHeight * 0.05) / 2,
    },

    //Icone Configurações
    configContainer: {
        marginRight: windowWidth * 0, // Ajuste dinâmico da margem direita
    },
    config: {
        width: windowWidth * 0.06, // Utilizando 8% da largura da tela
        height: windowHeight * 0.04, // Utilizando 6% da altura da tela
        resizeMode: 'contain',
        marginTop: (windowHeight * 0.14 - windowHeight * 0.05) / 2,
    },
});

export default Header;
