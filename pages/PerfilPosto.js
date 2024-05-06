import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { IconButton } from 'react-native-paper';

import Header from "../componentes/Header";
import Footer from "../componentes/footer";
import Body from "../componentes/body";

const Home = () => {
    const [favoritado, setFavoritado] = useState(false);

    const handleFavoritar = () => {
        setFavoritado(!favoritado);
    };

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../Img/Logo/logoshell.png')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Posto Shell</Text>
                    <Text style={styles.subtitle}>Rua Dom João Antônio dos Santos, 195, Belo Horizonte</Text>
                </View>
                <View style={styles.starContainer}>
                    <IconButton
                        icon={favoritado ? 'star' : 'star-outline'}
                        style={styles.iconfav}
                        size={30}
                        onPress={handleFavoritar}
                    />
                </View>
            </View>
            <View style={styles.linha1}></View>
            <Body>
    <View style={styles.combustiveisContainer}>
        <Text style={styles.combustiveisTitle}>Combustíveis disponíveis:</Text>
        <View style={styles.caixaContainer}>
        <View style={styles.caixaGas}>
                            <Text style={styles.precoCombustivel}>R$ 5,72</Text>
                            <Text style={styles.tipoCombustivel}>GASOLINA</Text>
                        </View> 
            <View style={styles.caixaEta}></View>
            <View style={styles.caixaDiesel}></View>
        </View>
        <View style={styles.caixaContainer}>
            <View style={styles.caixaGasAd}></View> 
            <View style={styles.caixaEtaAd}></View>
            <View style={styles.caixaDieselAd}></View>
        </View>
        <View style={styles.linha2}></View>
        <View style={styles.outrosServicosContainer}>
            <Text style={styles.outrosServicosTitle}>Outros serviços oferecidos:</Text>
        </View>
    </View>
</Body>
            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#ffff',
        height: 100, // ajuste conforme necessário
    },
    logoContainer: {
        marginLeft: 15,
    },
    logo: {
        width: 52,
        height: 48,
    },
    titleContainer: {
        flex: 1,
        marginLeft: 20,
    },
    title: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#666',
        fontSize: 13,
    },
    starContainer: {
        marginRight: 2,
    },
    iconfav: {
        
    },
    linha1: {
        height: 1,
        backgroundColor: '#ccc',
    },
    combustiveisContainer: {
        marginTop: 5,
        paddingHorizontal: 5,
    },
    combustiveisTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    caixaContainer: {
        flexDirection: 'row',
    },
    caixaGas: {
        width: 105,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#272727',
        borderRadius: 15,
        boxShadow: '0px 0px 9.7px rgba(0, 0, 0, 0.25)',
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
    },
    precoCombustivel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        
    },
    tipoCombustivel: {
        fontSize: 14,
        color: '#272727',
        fontWeight: 'bold',
    },
    caixaEta: {
        width: 105,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#272727',
        borderRadius: 15,
        boxShadow: '0px 0px 9.7px rgba(0, 0, 0, 0.25)',
        alignItems: 'center',
    },
    caixaDiesel: {
        width: 105,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#272727',
        borderRadius: 15,
        boxShadow: '0px 0px 9.7px rgba(0, 0, 0, 0.25)',
        alignItems: 'flex-end',
        marginStart: 10,
    },
    caixaGasAd: {
        width: 105,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#272727',
        borderRadius: 15,
        boxShadow: '0px 0px 9.7px rgba(0, 0, 0, 0.25)',
        alignItems: 'flex-start',
        marginEnd: 10,
        marginTop: 15,
    },
    caixaEtaAd: {
        width: 105,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#272727',
        borderRadius: 15,
        boxShadow: '0px 0px 9.7px rgba(0, 0, 0, 0.25)',
        alignItems: 'center',
        marginTop: 15,
    },
    caixaDieselAd: {
        width: 105,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#272727',
        borderRadius: 15,
        boxShadow: '0px 0px 9.7px rgba(0, 0, 0, 0.25)',
        alignItems: 'flex-end',
        marginStart: 10,
        marginTop: 15,
    },
    linha2: {
        height: 1,
        backgroundColor: '#ccc',
        marginTop: 15,
    },
    outrosServicosContainer: {
        marginTop: 15,
        
    },
    outrosServicosTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Home;