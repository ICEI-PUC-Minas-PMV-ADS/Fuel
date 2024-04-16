import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Header from "../componentes/Header";
import Footer from "../componentes/footer";
import Body from "../componentes/body";


const Home = () => {

    return (

        <>
            <Header />
            <Body>
                <View style={styles.container}>
                    <Text style={styles.text}>RUAN ACHO QUE AGORA CONSEGUI RESOLVER PARTE DOS BUGS.
                        {"\n\n"} {/* Duas quebras de linha para adicionar um parágrafo */}
                        O problema era as questões dos children que tinhamos que colocar no Body.js.
                        Preciso entender essa função do children.
                        {"\n\n"}
                        Qualquer amarelo que aparecer nessa tela, vem do arquivo App.js, neste momento, linha 46.
                        </Text>
                </View>
            </Body>
            <Footer />
        </>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    }
});

export default Home;