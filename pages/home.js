import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { List } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

//IMPORTAÇÕES DE COMPONENTES
import Header from "../componentes/Header";
import Footer from "../componentes/footer";
import Body from "../componentes/body";

//IMPORTAÇÕES DE BANCO DE DADOS
import { getEstabelecimentos } from '../services/EstabelecimentosDB';


import { useNavigation } from '@react-navigation/native'

const DATA = [
    {
        id: 'Posto1',
        image: require('../Img/Logo/logoshell.png'),
        title: 'Rua Dom João Antônio dos Santos, 195, Padre Esutáquio - Belo Horizonte',
        subtitleAmount: 'R$: 5,74',
        subtitleType: 'Gasolina',
        subtitleAmount2: 'R$: 3,87',
        subtitleType2: 'Álcool',
    },
    {
        id: 'Posto2',
        image: require('../Img/Logo/logoBR.png'),
        title: 'Avenida Tereza Cristina, 1795, Betania - Belo Horizonte',
        subtitleAmount: 'R$: 5,79',
        subtitleType: 'Gasolina',
        subtitleAmount2: 'R$: 3,89',
        subtitleType2: 'Álcool',
    },
    {
        id: 'Posto3',
        image: require('../Img/Logo/logoipiranga.png'),
        title: 'Avenida Vereador Cícero Idelfonso, 684, João Pinheiro - Belo Horizonte',
        subtitleAmount: 'R$: 5,99',
        subtitleType: 'Gasolina',
        subtitleAmount2: 'R$: 3,95',
        subtitleType2: 'Álcool',
    },
    {
        id: 'Posto4',
        image: require('../Img/Logo/logoBR.png'),
        title: 'Rua Lagoa da Prata, 415, Salgado Filho - Belo Horizonte',
        subtitleAmount: 'R$: 6,09',
        subtitleType: 'Gasolina',
        subtitleAmount2: 'R$: 3,99',
        subtitleType2: 'Álcool',
    },
    {
        id: 'Posto5',
        image: require('../Img/Logo/logoale.png'),
        title: 'Avenida Amazonas, 5355, Centro - Belo Horizonte',
        subtitleAmount: 'R$: 6,19',
        subtitleType: 'Gasolina',
        subtitleAmount2: 'R$: 4,19',
        subtitleType2: 'Álcool',
    },
    {
        id: 'Posto6',
        image: require('../Img/Logo/logoshell.png'),
        title: 'Rua Juatuba, 10, Vista Alegre - Belo Horizonte',
        subtitleAmount: 'R$: 6,19',
        subtitleType: 'Gasolina',
        subtitleAmount2: 'R$: 4,29',
        subtitleType2: 'Álcool',
    },
    {
        id: 'Posto6',
        image: require('../Img/Logo/logoshell.png'),
        title: 'Avenida Amazonas, 7605, Gameleira - Belo Horizonte',
        subtitleAmount: 'R$: 6,25',
        subtitleType: 'Gasolina',
        subtitleAmount2: 'R$: 4,35',
        subtitleType2: 'Álcool',
    },
];

const Item = ({ image, title, subtitleAmount, subtitleType, subtitleAmount2, subtitleType2 }) => (
    <View style={styles.itemContainer}>
        <View style={styles.item}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subtitleContainer}>
                <View style={styles.subtitleRow}>
                    <Text style={styles.subtitleAmount}>{subtitleAmount}</Text>
                    <Text style={styles.subtitleType}>{subtitleType}</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.subtitleRow}>
                    <Text style={styles.subtitleAmount2}>{subtitleAmount2}</Text>
                    <Text style={styles.subtitleType2}>{subtitleType2}</Text>
                </View>
            </View>
        </View>
    </View>
);

const Home = () => {

    const navigation = useNavigation();

    const [postos, setPostos] = useState([]);

    useEffect(() => {
        getEstabelecimentos().then((dados) => {
            setPostos(dados);
        });
    }, []);

    const renderItem = ({ item }) => (
        <List.Item
            title="endereço"
            subtitleAmount="valor"
            subtitleType="tipo"
        />
    );

    return (
        <>
            <Header />
            <Body>
                <FlatList
                    style={styles.flatlist}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} subtitleAmount={item.subtitleAmount} subtitleType={item.subtitleType} subtitleAmount2={item.subtitleAmount2} subtitleType2={item.subtitleType2} image={item.image} />}
                    keyExtractor={item => item.id}
                />
            </Body>
            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "transparent",
        marginLeft: 5,

        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5,
    },
    item: {
        backgroundColor: "#FFFfFF",
        padding: 10,
        marginVertical: '2%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: 'row', // Para alinhar a imagem e o título lado a lado
        alignItems: 'center', // Para centralizar verticalmente
    },
    title: {
        fontSize: 13,
        textAlign: "center",
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
    },

    subtitleRow: {
        alignItems: 'center',
        verticalAlign: 'center',
    },
    subtitleAmount: {
        fontSize: 16,
        color: 'darkgreen',
        fontWeight: 'bold',
        
    },
    subtitleType: {
        fontSize: 16,
        color: 'darkgreen',
        fontWeight: 'bold',
        
    },

    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 272727,
        marginVertical: 5, // Ajuste conforme necessário
      },

    subtitleAmount2: {
        fontSize: 16,
        color: 'darkgreen',
        fontWeight: 'bold',

    },
    subtitleType2: {
        fontSize: 16,
        color: 'darkgreen',
        fontWeight: 'bold',

       
    },

    image: {
        width: 50,
        height: 45,
    },
    flatlist: {
        flex: 1,
        marginStart: 15,
        width: '100%',
    },
    subtitleContainer: {
        flexDirection: 'column',
        marginRight: 5,
    },
});

export default Home;