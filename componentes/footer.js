import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Appbar style={styles.appbar}>
                <View style={styles.iconContainer}>
                    <Appbar.Action icon={require('../Img/Icones/homepage.png')} color="white" onPress={() => console.log('Home clicado')} />
                </View>
                <View style={styles.iconContainer}>
                    <Appbar.Action icon={require('../Img/Icones/favorito.png')} color="white" onPress={() => console.log('Favoritos clicado')} />
                </View>
                <View style={styles.iconContainer}>
                    <Appbar.Action icon={require('../Img/Icones/mapa.png')} color="white" onPress={() => console.log('Mapa clicado')} />
                </View>
                <View style={styles.iconContainer}>
                    <Appbar.Action icon={require('../Img/Icones/perfil.png')} color="white" onPress={() => console.log('Perfil clicado')} />
                </View>
            </Appbar>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    appbar: {
        backgroundColor: '#00052F',
        height: 90, //altura da parte azul do rodape.
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center', // posicao centralizada horizontalmente dos icones
        justifyContent: 'center', //posicao centralizada verticalmente dos icones
        marginBottom: '8%',
        width: windowWidth * 0.07, // Utilizando 8% da largura da tela
        height: windowHeight * 0.05, // Utilizando 6% da altura da tela
    },
});

export default Footer;
