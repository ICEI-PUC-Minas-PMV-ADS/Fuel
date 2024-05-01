import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { insertEstabelecimentos } from '../services/EstabelecimentosDB';
import { useNavigation } from '@react-navigation/native';
import Header from '../componentes/Header';
import Body from '../componentes/body';
import Footer from '../componentes/footer';

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

    const handleCadastro = () => {
        console.log('Iniciando cadastro do estabelecimento...');
        insertEstabelecimentos({
            nome: nome,
            cnpj: cnpj,
            endereco: endereco,
            telefone: telefone,
            tipoCombustivel: tipoCombustivel,
            preco: preco,
            bandeiraPosto: bandeiraPosto,
            outrosServicos: outrosServicos,
        }).then(() => {
            console.log('Estabelecimento cadastrado com sucesso!');
            // Adicione aqui a lógica para redirecionar para a página desejada após o cadastro
            navigation.navigate('Home'); 
        })
        .catch(error => {
            console.error('Erro ao cadastrar estabelecimento:', error);
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
                        value={nome}
                        onChangeText={(value) => setNome(value)}
                    />

                    <Text style={styles.label}>CNPJ:</Text>
                    <TextInput
                        style={styles.input}
                        value={cnpj}
                        onChangeText={(value) => setCnpj(value)}
                    />

                    <Text style={styles.label}>Endereço:</Text>
                    <TextInput
                        style={styles.input}
                        value={endereco}
                        onChangeText={(value) => setEndereco(value)}
                    />

                    <Text style={styles.label}>Telefone:</Text>
                    <TextInput
                        style={styles.input}
                        value={telefone}
                        onChangeText={(value) => setTelefone(value)}
                    />

                    <Text style={styles.label}>Tipo de Combustivel:</Text>
                    <TextInput
                        style={styles.input}
                        value={tipoCombustivel}
                        onChangeText={(value) => setTipoCombustivel(value)}
                    />

                    <Text style={styles.label}>Preço:</Text>
                    <TextInput
                        style={styles.input}
                        value={preco}
                        onChangeText={(value) => setPreco(value)}
                    />

                    <Text style={styles.label}>Bandeira do Posto:</Text>
                    <TextInput
                        style={styles.input}
                        value={bandeiraPosto}
                        onChangeText={(value) => setBandeiraPosto(value)}
                    />

                    <Text style={styles.label}>Outros Serviços:</Text>
                    <TextInput
                        style={styles.input}
                        value={outrosServicos}
                        onChangeText={(value) => setOutrosServicos(value)}
                    />

                
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
