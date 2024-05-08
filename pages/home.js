import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { List } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

//IMPORTAÇÕES DE COMPONENTES
import Header from "../componentes/Header";
import Footer from "../componentes/footer";
import Body from "../componentes/body";


import { useNavigation } from '@react-navigation/native'

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
                    data={postos}
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