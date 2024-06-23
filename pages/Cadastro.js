import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import Header from '../componentes/Header';
import Body from '../componentes/body';
import Footer from '../componentes/footer';


import { getPostos, updatePostos, insertPostos, deletePostos } from '../services/postos.service';

import { imageMap } from './home';

const tiposCombustivel = ['Etanol', 'Gasolina', 'Gasolina Aditivada', 'Gasolina Premium', 'Diesel'];



const CadastroEstabelecimento = () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute();
    const [Postos, setPostos] = useState([]);
    const posto = route.params?.posto;



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
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
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

    useEffect(() => {
        if (posto) {
            setNome(posto.nome);
            setEndereco(posto.endereco);
            setCnpj(posto.cnpj);
            setBandeiraPosto(posto.bandeiraPosto);
            setLatitude(posto.latitude);
            setLongitude(posto.longitude);
            setTipoCombustivel_1(posto.tipoCombustivel_1)
            setTipoCombustivel_2(posto.tipoCombustivel_2)
            setTipoCombustivel_3(posto.tipoCombustivel_3)
            setTipoCombustivel_4(posto.tipoCombustivel_4)
            setTipoCombustivel_5(posto.tipoCombustivel_5)
            setTipoCombustivel_6(posto.tipoCombustivel_6)
            setPreco_1(posto.preco_1)
            setPreco_2(posto.preco_2)
            setPreco_3(posto.preco_3)
            setPreco_4(posto.preco_4)
            setPreco_5(posto.preco_5)
            setPreco_6(posto.preco_6)
            setOutrosServicos(posto.outrosServicos)

        }
    }, [posto]);

    //LOGICA PARA CADASTRAR POSTO 

    const handleCadastro = () => {
        console.log('Iniciando cadastro do estabelecimento...');
        if (!nome || !cnpj || !endereco || !tipoCombustivel_1 || !preco_1 || !tipoCombustivel_2 || !preco_2 || !bandeiraPosto || !outrosServicos) {
            console.error('Todos os campos obrigatórios devem ser preenchidos.');
            let message = 'Por favor, preencha todos os campos obrigatórios: ';
            message += !nome ? 'Nome, ' : '';
            message += !cnpj ? 'CNPJ, ' : '';
            message += !endereco ? 'Endereço, ' : '';
            message += !latitude ? 'Latitude, ' : '';
            message += !longitude ? 'Longitude, ' : '';
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
            latitude: latitude,
            longitude: longitude,
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

    //LOGICA PARA ATUALIZAR POSTO

    const handleSalvar = () => {

        if (posto) {
            updatePostos({
                id: posto.id,
                nome: nome,
                cnpj: cnpj,
                endereco: endereco,
                latitude: latitude,
                longitude: longitude,
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
            }).then(res => {
                navigation.goBack();

            });

        } else {

            insertPostos(
                {
                    nome: nome,
                    cnpj: cnpj,
                    endereco: endereco,
                    latitude: latitude,
                    longitude: longitude,
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
            ).then(res => {
                navigation.goBack();
            });
        }

    };
    // LOGICA PARA EXCLUIR POSTO

    const handleExcluir = () => {
        deletePostos(item.cnpj).then(res => {
            navigation.goBack();
        });
    }

    //LOGICA PARA CANCELAR A ATUALIZAÇÃO
    const handleCancelar = () => {
        navigation.navigate('Home');
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

                        <Text style={styles.label}>Latitude:<Text style={styles.required}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            value={latitude}
                            onChangeText={(value) => setLatitude(value)}
                        />

                        <Text style={styles.label}>Longitude:<Text style={styles.required}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            value={longitude}
                            onChangeText={(value) => setLongitude(value)}
                        />

                        <Text style={styles.label}>Bandeira do Posto:<Text style={styles.required}>*</Text></Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={bandeiraPosto}
                                onValueChange={setBandeiraPosto}
                            >
                                <Picker.Item label="Selecione a bandeira" value="" />
                                {Object.keys(imageMap).map(bandeira => (
                                    <Picker.Item key={bandeira} label={bandeira} value={bandeira} />
                                ))}
                            </Picker>
                        </View>


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

<View style={styles.buttonContainer}>
    {posto ? (
        <>
            <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonCancelar]} onPress={handleCancelar}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </>
    ) : (
        <Button title="Cadastrar" onPress={handleCadastro} />
    )}
</View>

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
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5, // Opcional: Adicione bordas arredondadas para uma aparência mais suave
        marginBottom: 10,
        width: '100%',
    },
    picker: {
        height: 40,
        width: '100%',
    },

    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
        flex: 1, // Adiciona flex para ocupar uma parte igual do espaço disponível
        width: '100%', // Largura fixa para cada botão
    },
        
    buttonCancelar: {
        backgroundColor: '#ef1616',
        marginLeft: 10, // Adiciona margem esquerda para separar os botões
        width: '100%',
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',

    },
});

export default CadastroEstabelecimento;
