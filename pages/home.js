import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import postData from '../db.json'
import * as Location from 'expo-location';




//IMPORTAÇÕES DE COMPONENTES
import Header from "../componentes/Header";
import Footer from "../componentes/footer";
import Body from "../componentes/body";
import filtrosPostos  from "../componentes/filtro";
//import { getPostos } from '../services/PostosServicesDb';

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
export {imageMap, getBandeiraImage};

const Item = ({ image, title, subtitleAmount, subtitleType, subtitleAmount2, subtitleType2 }) => (
    <View style={styles.itemContainer}>
        <View style={styles.item}>
            <Image source={image} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitleContainer}>            
        <View style={styles.subtitleRow}> 
            <Text style={styles.preco_1}>{subtitleAmount}</Text>
            <Text style={styles.tipoCombustivel_1}>{subtitleType}</Text>
            <View style={styles.divider} />
        <View style={styles.subtitleRow}> 
            <Text style={styles.preco_2}>{subtitleAmount2}</Text>
            <Text style={styles.tipoCombustivel_2}>{subtitleType2}</Text>
        </View>    
        </View>
        </View>
        </View>
    </View>
);

const Home = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [postos, setPostos] = useState(postData.postos);
    const [searchQuery, setSearchQuery] = useState('');
    const [userLocation, setUserLocation] = useState(null);

    const handlePostoSelect = (posto) => {
        navigation.navigate('Postos', { posto });
    };

    useEffect(() => {
        if (isFocused) {
            setPostos(postData.postos);
        }
    }, [isFocused]);

    useEffect(() => {
        if (isFocused) {
            setPostos(postData.postos);
        }
    }, [isFocused]);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setUserLocation(location.coords);
        })();
    }, []);

    const filteredPostos = filtrosPostos(postos, searchQuery, userLocation);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handlePostoSelect(item)}>
            <View style={styles.item}>
                <Image source={getBandeiraImage(item.bandeiraPosto)} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.endereco}>{item.endereco}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.subtitleColumn}>
                        <Text style={styles.preco}>{item.preco_1}</Text>
                        <Text style={styles.tipoCombustivel}>{item.tipoCombustivel_1}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.subtitleColumn}>
                        <Text style={styles.preco}>{item.preco_2}</Text>
                        <Text style={styles.tipoCombustivel}>{item.tipoCombustivel_2}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    
    

    return (
        <>
            <Header />
            <View style={styles.bodyContainer}>
                <Body>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Buscar posto..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <FlatList
                        style={styles.flatlist}
                        data={filteredPostos}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </Body>
            </View>
            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 100,
    }, 

    itemContainer: {
        backgroundColor: "#FFFfFF",
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    item: {
        flexDirection: 'row', // Para alinhar a imagem e o título lado a lado
        alignItems: 'center', // Para centralizar verticalmente
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    endereco: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        flexDirection: 'column',
    },
    subtitleColumn: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    preco: {
        fontSize: 16,
        color: 'darkgreen',
        fontWeight: 'bold',
    },
    tipoCombustivel: {
        fontSize: 16,
        color: 'darkgreen',
        fontWeight: 'bold',
    },
    divider: { //Linha que divide preço e tipo de combustivel
        width: '40%',
        height: 1,
        backgroundColor: '#272727',
        marginVertical: 5,
        alignSelf: 'flex-end',
    },
    flatlist: {
        flex: 1,
    },

    bodyContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 80,
    },

    searchBar: {
        height: 50,
        borderColor: 'green',
        borderWidth: 2.5,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        fontStyle: 'italic',
        fontSize: 18
    },
});

export default Home;