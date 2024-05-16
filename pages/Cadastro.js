import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import Header from '../componentes/Header';
import Body from '../componentes/body';
import Footer from '../componentes/footer';


import { getPostos, updatePostos, insertPostos, deletePostos } from '../services/postos.service';

import { imageMap } from './home';

const tiposCombustivel = ['Etanol', 'Gasolina Comum', 'Gasolina Aditivada', 'Gasolina Premium', 'Diesel'];



const CadastroEstabelecimento = () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [Postos, setPostos] = useState([]);

    useEffect(() => {
        if (isFocused) {
          getPostos().then(dados => {
            setPostos(dados);
          }).catch(error => {
            console.error('Erro ao buscar os postos:', error);
          });
    
          console.log('Iniciando a tela!');
        }
      }, [isFocused]);

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tipoCombustivel_1, setTipoCombustivel_1] = useState('');
    const [tipoCombustivel_2, setTipoCombustivel_2] = useState('');
    const [tipoCombustivel_3, setTipoCombustivel_3] = useState('');
    const [tipoCombustivel_4, setTipoCombustivel_4] = useState('');
    const [tipoCombustivel_5, setTipoCombustivel_5] = useState('');
    const [tipoCombustivel_6, setTipoCombustivel_6] = useState('');
    const [preco_1, setPreco_1] = useState('');
    const [preco_2, setPreco_2] = useState('');
    const [preco_3, setPreco_3] = useState('');
    const [preco_4, setPreco_4] = useState('');
    const [preco_5, setPreco_5] = useState('');
    const [preco_6, setPreco_6] = useState('');
    const [bandeiraPosto, setBandeiraPosto] = useState('');
    const [outrosServicos, setOutrosServicos] = useState('');

    const handleCadastro = () => {
        console.log('Iniciando cadastro do estabelecimento...');
        if (!nome || !cnpj || !endereco || !tipoCombustivel_1 || !preco_1 || !tipoCombustivel_2 || !preco_2 || !bandeiraPosto || !outrosServicos) {
            console.error('Todos os campos obrigatórios devem ser preenchidos.');
            let message = 'Por favor, preencha todos os campos obrigatórios: ';
            message += !nome ? 'Nome, ' : '';
            message += !cnpj ? 'CNPJ, ' : '';
            message += !endereco ? 'Endereço, ' : '';
            message += !tipoCombustivel_1 ? 'Tipo de Combustível, ' : '';
            message += !preco_1 ? 'Preço, ' : '';
            message += !bandeiraPosto ? 'Bandeira do Posto, ' : '';
            message += !outrosServicos ? 'Outros Serviços.' : '';

            Alert.alert("Campos Obrigatórios", message, [{ text: "OK" }]);
            return;
        }
        insertPostos({
            nome: nome,
            cnpj: cnpj,
            endereco: endereco,
            bandeiraPosto: bandeiraPosto,
            tipoCombustivel_1: tipoCombustivel_1 || null,
            preco_1: preco_1 || null,
            tipoCombustivel_2: tipoCombustivel_2 || null,
            preco_2: preco_2 || null,
            tipoCombustivel_3: tipoCombustivel_3 || null,
            preco_3: preco_3 || null,
            tipoCombustivel_4: tipoCombustivel_4 || null,
            preco_4: preco_4 || null,
            tipoCombustivel_5: tipoCombustivel_5 || null,
            preco_5: preco_5 || null,
            tipoCombustivel_6: tipoCombustivel_6 || null,
            preco_6: preco_6 || null,
            outrosServicos: outrosServicos || null,
        }).then(() => {
            console.log('Estabelecimento cadastrado com sucesso!');
            // Adicione aqui a lógica para redirecionar para a página desejada após o cadastro
            navigation.navigate('Home');
        })
            .catch(error => {
                console.error('Erro ao cadastrar estabelecimento:', error);
            });
    };

    const handleSalvar = () => {

        if (!item) {

            insertPostos(
                {
                    nome: nome,
                    cnpj: cnpj,
                    endereco: endereco,
                    bandeiraPosto: bandeiraPosto,
                    tipoCombustivel_1: tipoCombustivel_1 || null,
                    preco_1: preco_1 || null,
                    tipoCombustivel_2: tipoCombustivel_2 || null,
                    preco_2: preco_2 || null,
                    tipoCombustivel_3: tipoCombustivel_3 || null,
                    preco_3: preco_3 || null,
                    tipoCombustivel_4: tipoCombustivel_4 || null,
                    preco_4: preco_4 || null,
                    tipoCombustivel_5: tipoCombustivel_5 || null,
                    preco_5: preco_5 || null,
                    tipoCombustivel_6: tipoCombustivel_6 || null,
                    preco_6: preco_6 || null,
                    outrosServicos: outrosServicos || null,
                }
            ).then();
        }

        navigation.goBack();

    };


    return (
        <>
            <Header />
            <Body>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome:<Text style={styles.required}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            value={nome}
                            onChangeText={value => setNome(value)}
                        />


                        <Text style={styles.label}>CNPJ:<Text style={styles.required}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            value={cnpj}
                            onChangeText={(value) => setCnpj(value)}
                        />

                        <Text style={styles.label}>Endereço:<Text style={styles.required}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            value={endereco}
                            onChangeText={(value) => setEndereco(value)}
                        />

                        <Text style={styles.label}>Bandeira do Posto:<Text style={styles.required}>*</Text></Text>
                        <Picker
                            style={styles.input}
                            selectedValue={bandeiraPosto}
                            onValueChange={setBandeiraPosto}
                        >
                            <Picker.Item label="Selecione a bandeira" value="" />
                            {Object.keys(imageMap).map(bandeira => (
                                <Picker.Item key={bandeira} label={bandeira} value={bandeira} />
                            ))}
                        </Picker>


                        <Text style={styles.label}>Tipo de Combustivel:<Text style={styles.required}>*</Text></Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={tipoCombustivel_1}
                                onValueChange={(value) => setTipoCombustivel_1(value)}
                            >
                                <Picker.Item label="Selecione o tipo de combustível" value="" />
                                {tiposCombustivel.map((combustivel, index) => (
                                    <Picker.Item key={index} label={combustivel} value={combustivel} />
                                ))}
                            </Picker>
                        </View>

                        <Text style={styles.label}>Preço:<Text style={styles.required}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            value={preco_1}
                            onChangeText={(value) => setPreco_1(value)}
                        />

                        <Text style={styles.label}>Tipo de Combustivel:<Text style={styles.required}>*</Text></Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={tipoCombustivel_2}
                                onValueChange={(value) => setTipoCombustivel_2(value)}
                            >
                                <Picker.Item label="Selecione o tipo de combustível" value="" />
                                {tiposCombustivel.map((combustivel, index) => (
                                    <Picker.Item key={index} label={combustivel} value={combustivel} />
                                ))}
                            </Picker>
                        </View>

                        <Text style={styles.label}>Preço:<Text style={styles.required}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            value={preco_2}
                            onChangeText={(value) => setPreco_2(value)}
                        />

                        <Text style={styles.label}>Tipo de Combustivel:</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={tipoCombustivel_3}
                                onValueChange={(value) => setTipoCombustivel_3(value)}
                            >
                                <Picker.Item label="Selecione o tipo de combustível" value="" />
                                {tiposCombustivel.map((combustivel, index) => (
                                    <Picker.Item key={index} label={combustivel} value={combustivel} />
                                ))}
                            </Picker>
                        </View>
                        <Text style={styles.label}>Preço:</Text>
                        <TextInput
                            style={styles.input}
                            value={preco_3}
                            onChangeText={(value) => setPreco_3(value)}
                        />

                        <Text style={styles.label}>Tipo de Combustivel:</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={tipoCombustivel_4}
                                onValueChange={(value) => setTipoCombustivel_4(value)}
                            >
                                <Picker.Item label="Selecione o tipo de combustível" value="" />
                                {tiposCombustivel.map((combustivel, index) => (
                                    <Picker.Item key={index} label={combustivel} value={combustivel} />
                                ))}
                            </Picker>
                        </View>

                        <Text style={styles.label}>Preço:</Text>
                        <TextInput
                            style={styles.input}
                            value={preco_4}
                            onChangeText={(value) => setPreco_4(value)}
                        />

                        <Text style={styles.label}>Tipo de Combustivel:</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={tipoCombustivel_5}
                                onValueChange={(value) => setTipoCombustivel_5(value)}
                            >
                                <Picker.Item label="Selecione o tipo de combustível" value="" />
                                {tiposCombustivel.map((combustivel, index) => (
                                    <Picker.Item key={index} label={combustivel} value={combustivel} />
                                ))}
                            </Picker>
                        </View>

                        <Text style={styles.label}>Preço:</Text>
                        <TextInput
                            style={styles.input}
                            value={preco_5}
                            onChangeText={(value) => setPreco_5(value)}
                        />

                        <Text style={styles.label}>Tipo de Combustivel:</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={tipoCombustivel_6}
                                onValueChange={(value) => setTipoCombustivel_6(value)}
                            >
                                <Picker.Item label="Selecione o tipo de combustível" value="" />
                                {tiposCombustivel.map((combustivel, index) => (
                                    <Picker.Item key={index} label={combustivel} value={combustivel} />
                                ))}
                            </Picker>
                        </View>

                        <Text style={styles.label}>Preço:</Text>
                        <TextInput
                            style={styles.input}
                            value={preco_6}
                            onChangeText={(value) => setPreco_6(value)}
                        />

                        <Text style={styles.label}>Outros Serviços:<Text style={styles.required}>*</Text></Text>
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
                </ScrollView>
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
    contentContainer: {
        flexGrow: 1,
        padding: 18,
        alignItems: 'center',
        paddingBottom: 150,
    },
    inputContainer: {
        marginBottom: 10,
        width: '100%',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    required: {
        color: 'red'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },

    pickerContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5, // Opcional: Adicione bordas arredondadas para uma aparência mais suave
        marginBottom: 10,
        width: '100%',
    },
    picker: {
        height: 40,
        width: '100%',
    },
});

export default CadastroEstabelecimento;
