import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native';


//IMPORTAÇÕES DE COMPONENTES
import Header from "../componentes/Header";
import Footer from "../componentes/footer";
import Body from "../componentes/body";
import { getPostos } from '../services/PostosServicesDb';


/*const DATA = [
    {
        id: 'Posto1',
        bandeira: require('../Img/Logo/logoshell.png'),
        endereco: 'Rua Dom João Antônio dos Santos, 195, Padre Esutáquio - Belo Horizonte',
        preco_1: 'R$: 5,74',
        tipoCombustivel_1: 'Gasolina',
        preco_2: 'R$: 3,87',
        tipoCombustivel_2: 'Álcool',
    },
];*/

const Item = ({ image, title, subtitleAmount, subtitleType, subtitleAmount2, subtitleType2 }) => (
    <View style={styles.itemContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitleContainer}>
            <Text style={styles.preco_1}>{subtitleAmount}</Text>
            <Text style={styles.tipoCombustivel_1}>{subtitleType}</Text>
            <View style={styles.divider} />
            <Text style={styles.preco_2}>{subtitleAmount2}</Text>
            <Text style={styles.tipoCombustivel_2}>{subtitleType2}</Text>
        </View>
    </View>
);

const Home = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [postos, setPostos] = useState([]);

    useEffect(() => {
        if (isFocused) {
            getPostos().then(setPostos).catch(error => console.error("Erro ao carregar os postos:", error));
        }
    }, [isFocused]);

    const renderItem = ({ item }) => (
        <Item
            title={item.nome}
            subtitleAmount={item.preco_1}
            subtitleType={item.tipoCombustivel_1}
            subtitleAmount2={item.preco_2}
            subtitleType2={item.tipoCombustivel_2}
            image={require('../Img/Logo/logoshell.png')} // Imagem estática
        />
    );

    return (
        <>
            <Header />
            <Body>
                <FlatList
                    style={styles.flatlist}
                    data={postos}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
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
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5,
    },
    /*item: {
        backgroundColor: "#FFFfFF",
        padding: 10,
        marginVertical: '2%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: 'row', // Para alinhar a imagem e o título lado a lado
        alignItems: 'center', // Para centralizar verticalmente
    },*/
    endereco: {
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
        backgroundColor: '#272727',
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