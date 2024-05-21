import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

//IMPORTAÇÕES DE COMPONENTES
import Header from '../componentes/Header';
import Footer from '../componentes/footer';
import Body from '../componentes/body';

// Mapeamento de bandeiras a imagens
const imageMap = {
    'shell': require('../Img/Logo/logoshell.png'),
    'ale': require('../Img/Logo/logoale.png'),
    'br': require('../Img/Logo/logoBR.png'),
    'ipiranga': require('../Img/Logo/logoipiranga.png'),
};

// Função para normalizar o nome da bandeira e obter a imagem correspondente
const getBandeiraImage = (bandeira) => {
    const normalizedBandeira = bandeira.toLowerCase().replace(/\s+/g, '');
    return imageMap[normalizedBandeira] || require('../Img/Logo/default.png'); // Imagem padrão se não encontrar
};
export { imageMap, getBandeiraImage };

const Postos = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { posto } = route.params;

    return (
        <>
            <Header />
            <Body>
                <View style={styles.itemContainer}>
                    <View style={styles.section}>
                        <Text style={styles.title}>{posto.endereco}</Text>
                    </View>
                    <View style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Combustíveis Disponíveis</Text>
                        <Text style={styles.preco}>{posto.tipoCombustivel_1}: {posto.preco_1}</Text>
                        <Text style={styles.preco}>{posto.tipoCombustivel_2}: {posto.preco_2}</Text>
                    </View>
                    <View style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Outros Serviços</Text>
                        {/* Adicione aqui os outros serviços oferecidos */}
                    </View>
                    <View style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Avaliação</Text>
                        {/* Adicione aqui a funcionalidade para avaliar o posto */}
                    </View>
                    <View style={styles.divider} />

                    <View style={styles.section}>
                        <TouchableOpacity style={styles.buttonMapa} onPress={() => navigation.navigate('Maps')}>
                            <Image source={require('../Img/Icones/mapa.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
                            <Text style={styles.buttonMapaText}>Abrir Mapa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Body>
            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    section: {
        paddingVertical: 10,
    },
    divider: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    preco: {
        fontSize: 14,
    },
    buttonMapa: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#00052F',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonMapaText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Postos;
