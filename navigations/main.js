import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Home from "../pages/home";
import MeuPerfil from "../pages/meuperfil";
import Maps from "../pages/Maps";
import Cadastro from "../pages/Cadastro";

const Stack = createNativeStackNavigator();

const Main = () => {
    const [estabelecimentos, setEstabelecimentos] = useState([]);

/*====================================================================================
 Coloquei o trecho abaixo só para listar os estabelecimentos cadastrados quando a aplicação iniciar.
    useEffect(() => {
        const db = SQLite.openDatabase('estabelecimentos.db');
        db.transaction(tx => {
            // Consultando todos os estabelecimentos
            tx.executeSql(
                "SELECT * FROM Estabelecimentos;",
                [],
                (_, { rows }) => {
                    console.log("Estabelecimentos:", JSON.stringify(rows._array));
                    setEstabelecimentos(rows._array); // Armazenando os dados no estado
                },
                (_, error) => console.error("Database error:", error)
            );
        });
    }, []);
/*====================================================================================*/
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ header: () => null }}
            />
            <Stack.Screen 
                name="MeuPerfil" 
                component={MeuPerfil}
                options={{ header: () => null }}
            />
            <Stack.Screen 
                name="Maps" 
                component={Maps}
                options={{ header: () => null }}
            />
            <Stack.Screen 
                name="Cadastro" 
                component={Cadastro}
                options={{
                    header: () => null,
                    // Passando dados para o componente Cadastro
                    data: estabelecimentos
                }}
            />
        </Stack.Navigator>
    );
};

export default Main;
