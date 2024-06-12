import React, { useState } from 'react';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { Button, Text, TextInput, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importar o ícone desejado

import Header from '../componentes/Header';
import Body from '../componentes/body';
import Input from '../componentes/Input';
import Container from '../componentes/Container';
import Footer from '../componentes/footer';

const App = () => {
    const [gas, setGas] = useState('');
    const [eta, setEta] = useState('');
    const [res, setRes] = useState('');

    const handleCalcular = () => {
        if (!gas || gas <= 0 || !eta || eta <= 0) {
            Alert.alert('Para calcular é necessário informar o preço dos combustíveis!');
        } else {
            let pct = Math.round((eta / gas) * 100);
            if (pct < 70) {
                setRes(pct + '%! Vale mais a pena usar Etanol!');
            } else {
                setRes(pct + '%! Vale mais a pena usar Gasolina!');
            }
        }
    };

    return (
        <Container>
            <Header />
            <ScrollView style={styles.scrollView}>
            <Body>
                <Text style={styles.textTitulo}>Fuel Calculator</Text>
                <Text style={styles.subtitulo1}>A calculadora do Fuel+ compara o preço do litro do álcool e da gasolina e mostra qual é o combustível mais vantajoso, financeiramente, no momento.</Text>
                <Text style={styles.subtitulo2}>Preencha os campos abaixo com os preços dos combustíveis que você encontra hoje nos postos e clique no botão "Calcular" para saber qual é a melhor opção.</Text>
                <View style={styles.calculadoraContainer}>
                    <IconButton
                        icon={({ }) => (
                            <MaterialCommunityIcons name="calculator-variant" color='#00052F' size={40} />
                        )} style={styles.icon}
                    />
                    <Input
                        label="Preço do Etanol"
                        value={eta}
                        onChangeText={(text) => setEta(text)}
                    />
                    <Input
                        label="Preço da Gasolina"
                        value={gas}
                        onChangeText={(text) => setGas(text)}
                    />
                    <Button style={[styles.button, { backgroundColor: '#00052F', borderColor: '#000000' }]} mode="contained" onPress={handleCalcular}>
                        <Text style={styles.buttonText}>Calcular</Text>
                    </Button>
                    <Text style={styles.resultadotext}>{res}</Text>
                </View>
                <View style={styles.explanationContainer}>
                    <Text style={styles.explanationText}>
                        <Text style={styles.boldText}>Entenda como o cálculo é feito:</Text>{'\n\n'}
                        O Etanol vale a pena quando custar até 70% do valor da gasolina, então, dividimos o valor do litro do Etanol pelo da Gasolina.{'\n\n'}
                        Quando o resultado é menor que 0,7, a recomendação é abastecer com Etanol. Se maior, a recomendação é escolher Gasolina.{'\n\n'}
                        Exemplo: se o Etanol custa R$ 3,29 e a Gasolina R$ 4,92, o resultado da divisão do primeiro pelo segundo é 0,67, menor que 0,7. Portanto, é mais vantajoso abastecer com Etanol.
                    </Text>
                </View>
                <View style={{ height: 120 }} />
            </Body>
            </ScrollView>
            <Footer />
        </Container>
        
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        margin: 10,
    },
    textTitulo: {
        fontSize: 31,
        fontWeight: 'bold',
        color: '#272727',
        marginTop: 10,
        textAlign: 'center',
        marginBottom: '4%',
    },
    button: {
        width: '48%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 18,
        marginTop: '1%',
        borderWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    subtitulo1: {
        fontSize: 15,
        color: '#676767',
        marginBottom: '2%',
        marginRight: '5%',
        marginLeft: '5%',
        textAlign: 'justify',
        align: 'center',
    },
    subtitulo2: {
        fontSize: 15,
        color: '#676767',
        marginBottom: '2%',
        marginRight: '5%',
        marginLeft: '5%',
        textAlign: 'justify',
        align: 'center',
    },
    calculadoraContainer: {
        padding: 16,
        margin: 16,
        borderRadius: 10,
        backgroundColor: '#EBCD07',
        borderColor: '#EBCD07',
    },
    resultadotext: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '3%',
    },
    explanationContainer: {
        padding: 16,
        margin: 16,
        borderRadius: 10,
        backgroundColor: '#ffffff', // Fundo branco
        borderColor: '#000000', // Borda preta
        borderWidth: 1,
    },
    explanationText: {
        fontSize: 15,
        color: '#676767',
        textAlign: 'justify',
    },
    boldText: {
        fontWeight: 'bold',
    },
    icon: {
        alignSelf: 'center',
        marginBottom: '3%'
    },
});

export default App;
