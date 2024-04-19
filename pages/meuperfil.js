import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper'; // Importe o Appbar do react-native-paper
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

import Header from '../componentes/Header';
import Footer from '../componentes/footer';


const MeuPerfil = () => {
    const [imagemPerfil, setImagemPerfil] = useState(null);
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nome, setNome] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        solicitarPermissaoGaleria();
    }, []);

    const solicitarPermissaoGaleria = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão necessária', 'Por favor, conceda permissão para acessar a galeria de imagens.');
        }
    };

    const selecionarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImagemPerfil(result.uri);
        }
    };


    return (
        <View style={styles.container}>

            <Header />


            <Text style={styles.textMeuPerfil}>Meu Perfil</Text>



            <TouchableOpacity style={styles.ContainerIcoFoto} onPress={selecionarImagem}>
                {imagemPerfil ? (
                    <Image source={{ uri: imagemPerfil }} style={styles.icoFoto} />
                ) : (
                    <Image source={require('../Img/Icones/addfoto.png')} style={styles.icoFoto} />
                )}
            </TouchableOpacity>



            <TextInput //Campo Nome
                style={styles.input}
                placeholder='Nome'
                onChangeText={text => setNome(text)}
                value={nome}
            />

            <TextInput //Campo Telefone
                style={styles.input}
                placeholder='Telefone'
                onChangeText={text => setTelefone(text)}
                value={telefone}
            />

            <TextInput //Campo Email
                style={styles.input}
                placeholder='E-mail'
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TouchableOpacity style={styles.buttonSair} onPress={() => Alert.alert('Sair')}>
                <Image source={require('../Img/Icones/logout.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
                <Text style={styles.buttonSairText}>Sair</Text>
            </TouchableOpacity>
            <Footer />

        </View>
    );
};

const styles = StyleSheet.create({

    // Parte principal da tela, parte abaixo do ico Foto.
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        
    },

    //Texto "meu perfil"
    textMeuPerfil: {
        fontSize: 45,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: '#272727',
        marginTop: 2,
    },

    //Input Nome/Telefone/Email
    input: {

        height: 50, // altura do campo
        width: 350, //largura do campo
        margin: 20, //espaço entre os campos
        borderWidth: 2, //Borda da linha
        padding: 10,
        borderRadius: 35, //Arrendondando o campo
        backgroundColor: '#EDEDED', //cor de fundo

    },
    //Botão de Sair/Logout
    buttonSair: {
        flexDirection: 'row', 
        width: '40%', //Largura do Botão
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'red',
        borderRadius: 35, //Arrendodamento do botão
        justifyContent: 'center', //posicao centralizada verticalmente
        alignItems: 'center', // posicao centralizada horizontalmente
        marginTop: 300, // determinando onde o botao sair, deve ficar
        alignSelf: 'center', //centraliza o botão dentro do container
    },
    //Texto do Botão Sair/Logout
    buttonSairText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        
    },
    //Container da parte onde esta o icone da foto
    ContainerIcoFoto: {
        marginTop: 20,
        alignItems: 'center',
    },
    //Icone de Add Foto
    icoFoto: {
        width: 70,
        height: 70,
    },
   
    //Tamanho da Imagem do Perfil
    imagemPerfil: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20,
    },

});

export default MeuPerfil;