import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert, TextInput } from 'react-native';
import Body from '../componentes/body';
import Header from '../componentes/Header';
import Footer from '../componentes/footer';
import { register, checkEmailExists } from '../services/auth.services';


const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupPhoneNumber, setSignupPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const passwordInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const signupPasswordInputRef = useRef(null);

    const isValidPhoneNumber = (number) => {
        return /[0-9]{10,11}/.test(number);
    };

    const isValidPassword = (password) => {
        return password.length > 7;
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleLogin = () => {
        if (!isValidPhoneNumber(phoneNumber) || !isValidPassword(loginPassword)) {
            Alert.alert("Atenção", "Número de celular ou senha inválidos.");
            return;
        }
        console.log('Número de celular:', phoneNumber);
        console.log('Senha:', loginPassword);
        // Exemplo: chame uma função de autenticação com os dados de número de celular e senha
    };

    const handleSignUp = async () => {
        // Verificar se o nome de usuário atende aos critérios
        if (name.length < 6) {
            Alert.alert('Atenção', 'O nome de usuário deve ter no mínimo 6 caracteres.');
            return;
        }

        try {
        // Verificar se o email já existe
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
           Alert.alert('Este email já está cadastrado. Por favor, use outro email.');
           return;
        }
        
        // Verificar se o formato do email é válido
        if (!isValidEmail(email)) {
            Alert.alert('Formato de email inválido.');
            return;
        }
    
        // Verificar se a senha tem no mínimo 8 caracteres
        if (signupPassword.length < 8) {
            Alert.alert('A senha deve ter no mínimo 8 caracteres.');
            return;
        }
    
        // Se todas as validações passarem, prosseguir com o cadastro
        const res = await register({
            nome: name,
            email: email,
            celular: signupPhoneNumber,
            password: signupPassword,
        });
        if (res) {
            Alert.alert('Cadastro realizado com sucesso!');
        } else {
            Alert.alert('Usuário não cadastrado! :(');
        }
    } catch (error) {
        console.error(error);
        Alert.alert('Ocorreu um erro ao tentar cadastrar o usuário.');
    }
};

    const handleForgotPassword = () => {
        // Navegação para a tela de redefinição de senha
        Alert.alert("Resetar Senha", "Funcionalidade de resetar senha não implementada.");
    };

    return (
        <>
            <Header />
            <Body>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Login</Text>
                    <Text style={styles.subtitulo}>Entre com seu número de celular e senha!</Text>

                    {/* Campo de entrada para o número de celular */}
                    <TextInput
                        style={styles.input}
                        placeholder="Seu número de celular"
                        placeholderTextColor={styles.placeholderText.color}
                        onChangeText={text => setPhoneNumber(text)}
                        value={phoneNumber}
                        keyboardType="numeric"
                    />

                    {/* Campo de entrada para a senha */}
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        secureTextEntry={true}
                        onChangeText={setLoginPassword}
                        value={loginPassword}
                        placeholderTextColor={styles.placeholderText.color}
                        returnKeyType="done"
                        ref={passwordInputRef}
                        onSubmitEditing={() => nameInputRef.current.focus()}
                    />

                    {/* Botão de acessar */}
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#EBCD07', borderColor: '#000000' }]} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleForgotPassword}>
                        <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.divisor}>OU</Text>
                        <View style={styles.divider} />
                    </View>

                    <Text style={styles.textTitulo}>Cadastre-se</Text>
                    <Text style={styles.subtitulo}>Vamos preencher o seu cadastro!</Text>

                    {/* Campo de entrada para o nome */}
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu nome"
                        placeholderTextColor={styles.placeholderText.color}
                        onChangeText={text => setName(text)}
                        value={name}
                        returnKeyType="next"
                        ref={nameInputRef}
                        onSubmitEditing={() => nameInputRef.current.focus()}
                    />

                    {/* Campo de entrada para e-mail */}
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu e-mail"
                        placeholderTextColor={styles.placeholderText.color}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        returnKeyType="next"
                        keyboardType="email-address"
                    />

                    {/* Campo de entrada para o número de celular no cadastro */}
                    <TextInput
                        style={styles.input}
                        placeholder="Seu número de celular"
                        placeholderTextColor={styles.placeholderText.color}
                        onChangeText={setSignupPhoneNumber}
                        value={signupPhoneNumber}
                        keyboardType="phone-pad"
                    />

                    {/* Campo de entrada para a nova senha */}
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        onChangeText={setSignupPassword}
                        value={signupPassword}
                        placeholderTextColor={styles.placeholderText.color}
                        secureTextEntry={true}
                        returnKeyType="done"
                        ref={signupPasswordInputRef}
                    />

                    {/* Botão de confirmar cadastro */}
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#027500', borderColor: '#000000' }]} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Confirmar cadastro</Text>
                    </TouchableOpacity>
                </View>
            </Body>
            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    // Parte principal da tela, parte abaixo do icone Foto.
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    //Texto
    textTitulo: {
        fontSize: 31,
        fontWeight: 'bold',
        color: '#272727',
        marginTop: 8,
    },
    subtitulo: {
        fontSize: 15,
        color: '#676767',
        marginTop: 7,
        marginBottom: 15,
    },
    //Caixa de Texto
    input: {
        width: '85%',
        height: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 12,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#EDEDED'
    },

    placeholderText: {
        color: '#676767',
    },

    //Botões Acessar e Confirmar Cadastro
    button: {
        width: '48%',
        height: 40,
        backgroundColor: '#EBCD07',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        marginBottom: 8,
        borderWidth: 1,
    },

    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    esqueciSenha: {
        color: '#0066FF',
        marginBottom: 8,
    },
    //Linha OU 
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',  // 
        marginVertical: 15,  // Espaçamento vertical
    },
    divider: {
        flex: 1,  // Linhas ocupam o espaço restante
        height: 2,  // Tornando a linha mais grossa para visibilidade
        backgroundColor: '#000000',  // Cor visível (ajuste conforme necessário)
        marginHorizontal: 8,  // Espaço entre o texto e as linhas
    },
    divisor: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
    },
    //Icone Configurações
    configContainer: {
        marginRight: 15,
    },

    config: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default Login;
