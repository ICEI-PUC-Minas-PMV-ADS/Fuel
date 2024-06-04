import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Header from '../componentes/Header';
import Body from '../componentes/body';
import Input from '../componentes/Input';
import Container from '../componentes/Container';

const App = () => {
    const [gas, setGas] = useState('');
    const [eta, setEta] = useState('');
    const [res, setRes] = useState('');

    const handleCalcular = () => {
        if (!gas || gas <= 0 || !eta || eta <= 0) {
            Alert.alert('Atenção! Obrigatório informar o valor dos combustíveis!');
        } else {
            let pct = Math.round((eta / gas) * 100);
            if (pct < 70) {
                setRes(pct + '% Recomendamos o uso do Etanol!');
            } else {
                setRes(pct + '% Recomendamos o uso da Gasolina!');
            }
        }
    };

    return (
        <Container>
            <Header title={'Calculadora Flex'} />

            <Body>
                <Input
                    label="Preço Gasolina"
                    value={gas}
                    onChangeText={(text) => setGas(text)}
                />
                <Input
                    label="Preço Etanol"
                    value={eta}
                    onChangeText={(text) => setEta(text)}
                />
                <Button mode="contained" onPress={handleCalcular}>
                    Calcular
                </Button>
                <Text style={styles.text}>{res}</Text>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        margin: 10,
    },
});


export default App;