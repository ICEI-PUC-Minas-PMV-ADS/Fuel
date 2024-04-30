import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { List } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

//IMPORTAÇÕES DE COMPONENTES
import Header from "../componentes/Header";
import Footer from "../componentes/footer";
import Body from "../componentes/body";

//IMPORTAÇÕES DE BANCO DE DADOS
import  {getEstabelecimentos} from '../services/EstabelecimentosDB';


import {useNavigation} from '@react-navigation/native'

const DATA = [
    {
        id: 'Posto1',
        image: require('../Img/Logo/logoshell.png'),
        title: 'Rua Dom João Antônio dos Santos, 195, Belo Horizonte',
    },
    {
        id: 'Posto2',
        image: require('../Img/Logo/logoshell.png'),
        title: 'Av. Amazonas, 8000, Belo Horizonte',
    },
];

const Item = ({ title, image }) => (
    <View style={styles.itemContainer}>
        <View style={styles.item}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
);

const Home = () => {

    const navigation = useNavigation();

    const [postos, setPostos] = useState([]);
    

    useEffect(() => {
        getEstabelecimentos().then((dados) =>{
            setPostos(dados);
});
    },[]);

    const renderItem = ({ item }) => (
        <List.Item
            title="First Item"
            description="Item description"
        />
    );

    return (
        <>
            <Header />
            <Body>
                <FlatList
                    style={styles.flatlist}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} image={item.image} />}
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
        padding: 20,
        marginVertical: '2%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: 'row', // Para alinhar a imagem e o título lado a lado
        alignItems: 'center' // Para centralizar verticalmente
    },
    title: {
        fontSize: 13,
        textAlign: "center",
        marginLeft: 10,
        flex: 0.7,
    },
    image: {
        width: 50,
        height: 45,
    },
    flatlist: {
        flex: 1,
        marginStart: 15,
        width: '100%',
    }
});

export default Home;
