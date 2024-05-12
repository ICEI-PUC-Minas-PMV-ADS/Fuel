import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../componentes/Header';
import Footer from '../componentes/footer';

import { insertEstabelecimento, setupDatabase } from '../services/DbServices';

const CadastroEstabelecimento = () => {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [tipoCombustivel, setTipoCombustivel] = useState('');
    const [preco, setPreco] = useState('');
    const [bandeiraPosto, setBandeiraPosto] = useState('');
    const [outrosServicos, setOutrosServicos] = useState('');

    useEffect(() => {
        setupDatabase().then(() => {
            console.log("Configuração banco de dados finalizado.");
        }).catch(error => {
            console.error("Configuração do banco de dados falhou:", error);
        });
    }, []);

    const handleCadastro = () => {
        const estabelecimento = {
            nome,
            cnpj,
            endereco,
            telefone,
            tipoCombustivel,
            preco,
            bandeiraPosto,
            outrosServicos,
        };


        insertEstabelecimento(estabelecimento)
            .then(() => {
                alert("Cadastro realizado com sucesso!");
                navigation.navigate('Home');
            })
            .catch(error => {
                console.error('Erro ao cadastrar estabelecimento:', error);
                alert("Erro ao cadastrar estabelecimento: " + error.message);
            });
    };

    return (
        <>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
            <Button title="Cadastrar Estabelecimento" onPress={handleCadastro} />
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />
                <Text style={styles.label}>CNPJ:</Text>
                <TextInput
                    style={styles.input}
                    value={cnpj}
                    onChangeText={setCnpj}
                />
                <Text style={styles.label}>Endereço:</Text>
                <TextInput
                    style={styles.input}
                    value={endereco}
                    onChangeText={setEndereco}
                />
                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                    style={styles.input}
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <Text style={styles.label}>Tipo de Combustível:</Text>
                <TextInput
                    style={styles.input}
                    value={tipoCombustivel}
                    onChangeText={setTipoCombustivel}
                />
                <Text style={styles.label}>Preço:</Text>
                <TextInput
                    style={styles.input}
                    value={preco}
                    onChangeText={setPreco}
                />
                <Text style={styles.label}>Bandeira do Posto:</Text>
                <TextInput
                    style={styles.input}
                    value={bandeiraPosto}
                    onChangeText={setBandeiraPosto}
                />
                <Text style={styles.label}>Outros Serviços:</Text>
                <TextInput
                    style={styles.input}
                    value={outrosServicos}
                    onChangeText={setOutrosServicos}
                />
                
            </View>
        </ScrollView>
        <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    container: {
        padding: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 5
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
});

export default CadastroEstabelecimento;
