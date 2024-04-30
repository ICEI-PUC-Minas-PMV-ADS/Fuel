import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { insertEstabelecimentos } from '../services/EstabelecimentosDB';
import Header from '../componentes/Header';
import Body from '../componentes/body'
import Footer from '../componentes/footer';

const CadastroEstabelecimento = () => {
    const [fields, setFields] = useState({
        nome: '',
        cnpj: '',
        endereco: {
            logradouro: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            cep: '',
        },
        telefone: '',
        tipoCombustivel: '',
        preco: '',
        bandeiraPosto: '',
        outrosServicos: '',
    });

    const handleCadastro = () => {
        // Lógica para inserir o estabelecimento no banco de dados
        insertEstabelecimentos(fields)
            .then(() => {
                console.log('Estabelecimento cadastrado com sucesso!');
                // Adicione aqui a lógica para redirecionar para a página desejada após o cadastro
                navigation.navigate('Home'); // Supondo que 'Home' seja o nome da sua tela Home
            })
            .catch((error) => {
                console.error('Erro ao cadastrar estabelecimento:', error);
            });
    };

    const handleChange = (fieldName, value) => {
        setFields({
            ...fields,
            [fieldName]: value,
        });
    };

    return (
        <>
            <Header />
            <Body>
                <View style={styles.container}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        value={fields.nome}
                        onChangeText={(value) => handleChange('nome', value)}
                    />

                    <Text style={styles.label}>CNPJ:</Text>
                    <TextInput
                        style={styles.input}
                        value={fields.cnpj}
                        onChangeText={(value) => handleChange('cnpj', value)}
                    />

                    <Text style={styles.label}>Endereço:</Text>
                    <TextInput
                        style={styles.input}
                        value={fields.endereco}
                        onChangeText={(value) => handleChange('endereco', value)}
                    />

                    <Text style={styles.label}>Telefone:</Text>
                    <TextInput
                        style={styles.input}
                        value={fields.telefone}
                        onChangeText={(value) => handleChange('telefone', value)}
                    />
                    <Text style={styles.label}>Tipo de Combustivel:</Text>
                    <TextInput
                        style={styles.input}
                        value={fields.tipoCombustivel}
                        onChangeText={(value) => handleChange('tipoCombustivel', value)}
                    />
                    <Text style={styles.label}>Preço:</Text>
                    <TextInput
                        style={styles.input}
                        value={fields.preco}
                        onChangeText={(value) => handleChange('preco', value)}
                    />
                    <Text style={styles.label}>Bandeira do Posto:</Text>
                    <TextInput
                        style={styles.input}
                        value={fields.bandeiraPosto}
                        onChangeText={(value) => handleChange('bandeiraPosto', value)}
                    />
                    <Text style={styles.label}>Outros Serviços:</Text>
                    <TextInput
                        style={styles.input}
                        value={fields.outrosServicos}
                        onChangeText={(value) => handleChange('outrosServicos', value)}
                    />
                    {/* Adicione os demais campos aqui com suas respectivas TextInputs */}
                    <Button
                        title="Cadastrar Estabelecimento"
                        onPress={handleCadastro}
                    />
                </View>
            </Body>
            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default CadastroEstabelecimento;
