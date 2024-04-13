import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../componentes/Header";
import Footer from "../componentes/footer";
import Body from "../componentes/body";


const Home = () => {

    return (

        <>
            <Header />
            <Body>



                {/* RUAN AQUI IREMOS DESENVOLVER A PARTE PRINCIPAL DA TELA INICIAL*/}




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
});

export default Home;