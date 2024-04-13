import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from 'react-native-paper';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Appbar style={styles.appbar}>
                <View style={styles.iconContainer}>
                    <Appbar.Action icon={require('../Img/Icones/homepage.png')} color="white" size={36} onPress={() => console.log('Home clicado')} />
                </View>
                <View style={styles.iconContainer}>
                    <Appbar.Action icon={require('../Img/Icones/favorito.png')} color="white" size={36} onPress={() => console.log('Favoritos clicado')} />
                </View>
                <View style={styles.iconContainer}>
                    <Appbar.Action icon={require('../Img/Icones/mapa.png')} color="white" size={36} onPress={() => console.log('Mapa clicado')} />
                </View>
                <View style={styles.iconContainer}>
                    <Appbar.Action icon={require('../Img/Icones/perfil.png')} color="white" size={36} onPress={() => console.log('Perfil clicado')} />
                </View>
            </Appbar>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    appbar: {
        backgroundColor: '#00052F',
        height: 70, //altura da parte azul do rodape.
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center', // posicao centralizada horizontalmente dos icones
        justifyContent: 'center', //posicao centralizada verticalmente dos icones
    },
});

export default Footer;
