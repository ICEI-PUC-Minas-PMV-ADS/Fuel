import API from './webapi.service';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const register = async (param) => {

    try {
        const response = await API.post(`/users`, param);
        const newUser = response.data;

        // Atualizar os dados no AsyncStorage
        await updateDb(newUser);

        return newUser;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Função para atualizar os dados no AsyncStorage após o registro de um novo usuário
const updateDb = async (newUser) => {
    try {
        // Ler os usuários existentes do AsyncStorage
        const usersJson = await AsyncStorage.getItem('users');
        const users = usersJson ? JSON.parse(usersJson) : [];

        // Adicionar o novo usuário à lista de usuários
        users.push(newUser);

        // Salvar os usuários atualizados no AsyncStorage
        await AsyncStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
        console.error('Erro ao atualizar o AsyncStorage:', error);
    }
};

// Função para ler o arquivo db.json
const readDbFile = async () => {
    try {
        const data = await AsyncStorage.getItem('db');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Erro ao ler o arquivo db.json:', error);
        return [];
    }
};

// Função para verificar se o e-mail já está cadastrado
export const checkEmailExists = async (email) => {
    try {
        // Obter os usuários armazenados no AsyncStorage
        const usersJson = await AsyncStorage.getItem('users');
        const users = usersJson ? JSON.parse(usersJson) : [];

        // Verificar se o email já está cadastrado
        return users.some(user => user.email === email);
    } catch (error) {
        console.error('Erro ao verificar se o e-mail existe:', error);
        return false;
    }
};