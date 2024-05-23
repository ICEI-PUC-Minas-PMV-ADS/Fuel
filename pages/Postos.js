import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';


//IMPORTAÇÕES DE COMPONENTES
import Header from '../componentes/Header';
import Footer from '../componentes/footer';
import Body from '../componentes/body';

// SERVIÇOS
import { deletePostos, getPostos, updatePostos } from '../services/postos.service';


// Mapeamento de bandeiras a imagens
const imageMap = {
    'shell': require('../Img/Logo/logoshell.png'),
    'ale': require('../Img/Logo/logoale.png'),
    'br': require('../Img/Logo/logoBR.png'),
    'ipiranga': require('../Img/Logo/logoipiranga.png'),
};


// Função para normalizar o nome da bandeira e obter a imagem correspondente
const getBandeiraImage = (bandeira) => {
    if (!bandeira) return require('../Img/Logo/default.png');
    const normalizedBandeira = bandeira.toLowerCase().replace(/\s+/g, '');
    return imageMap[normalizedBandeira] || require('../Img/Logo/default.png'); // Imagem padrão se não encontrar
};

const Postos = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { posto, isAdmin } = route.params; // `isAdmin` para verificar se o usuário é administrador
    const [rating, setRating] = useState(0); // Estado para a avaliação
    

    // Criar uma lista de combustíveis com seus preços
    const combustiveis = [];
    for (let i = 1; i <= 6; i++) {
        const tipoCombustivel = posto[`tipoCombustivel_${i}`];
        const preco = posto[`preco_${i}`];
        if (tipoCombustivel && preco) {
            combustiveis.push({ tipoCombustivel, preco });
        }
    }

    const handleEditar = () => {
        navigation.navigate('Cadastro', { 
            posto,
            latitude:posto.latitude,
            longitude:posto.longitude,
            preco_1: posto.preco_1,
            preco_2: posto.preco_2,
            preco_3: posto.preco_3,
            preco_4: posto.preco_4,
            preco_5: posto.preco_5,
            preco_6: posto.preco_6,
         });
    };

    const handleExcluir = () => {
        Alert.alert(
            "Excluir Posto",
            "Tem certeza que deseja excluir este posto?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Excluir",
                    onPress: () => {
                        deletePostos(posto.id).then(() => {
                            navigation.goBack();
                        }).catch(error => {
                            console.error('Erro ao excluir o posto:', error);
                        });
                    },
                    style: "destructive"
                }
            ]
        );
    };

    return (
        <>
            <Header />
            <Body>
                <View style={styles.itemContainer}>
                    <View style={styles.section}>
                        <View style={styles.titleContainer}>
                            <View style={styles.bandeiraContainer}>
                                <Image source={getBandeiraImage(posto.bandeiraPosto)} style={styles.bandeira} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.postoNome}>{posto.nome}</Text>
                                <Text style={styles.endereco}>{posto.endereco}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.divider} />
    
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Combustíveis Disponíveis</Text>
                        <View style={styles.combustivelContainer}>
                            {combustiveis.map((combustivel, index) => (
                                <View key={index} style={styles.combustivelBox}>
                                    <Text style={styles.preco}>{combustivel.preco}</Text>
                                    <Text style={styles.combustivelTipo}>{combustivel.tipoCombustivel}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.divider} />
    
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Outros Serviços</Text>
                        <Text style={styles.servico}>{posto.outrosServicos}</Text>
                    </View>
                    <View style={styles.divider} />
    
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Avaliação</Text>
                        <View style={styles.estrelasContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                                    <FontAwesome
                                        name={star <= rating ? 'star' : 'star-o'}
                                        size={30}
                                        color="#FFD700"
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={styles.divider} />
    
                    <View style={styles.section}>
                    <TouchableOpacity // Ajuste do botão para passar as coordenadas
                            style={styles.buttonMapa} 
                            onPress={() => navigation.navigate('Maps', {
                                latitude: posto.latitude,
                                longitude: posto.longitude,
                                label: posto.nome,
                                bandeiraPosto: posto.bandeiraPosto
                            })}
                        >
                            <Image source={require('../Img/Icones/mapa.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
                            <Text style={styles.buttonMapaText}>Abrir Mapa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider} />

{/*{isAdmin && (*/}
    <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={handleEditar}>
            <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonExcluir]} onPress={handleExcluir}>
            <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
    </View>
{/*})}*/}
            </Body>
            <Footer />
        </>
    );
}

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
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bandeiraContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    bandeira: {
        width: 70,
        height: 70,
    },
    postoNome: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    endereco: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    combustivelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    combustivelBox: {
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        width: '45%',
    },
    preco: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    combustivelTipo: {
        fontSize: 14,
        color: '#555',
    },
    servico: {
        fontSize: 14,
        paddingVertical: 2,
    },
    estrelasContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Centralizar as estrelas
    },
    button: {
        backgroundColor: '#ff79',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
        
    },
    buttonExcluir: {
        backgroundColor: '#ff4d4d',
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
