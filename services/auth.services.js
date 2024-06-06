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

// Função para ler os usuários do AsyncStorage
export const getUsersFromStorage = async () => {
    try {
        const usersJson = await AsyncStorage.getItem('users');
        return usersJson ? JSON.parse(usersJson) : [];
    } catch (error) {
        console.error('Erro ao ler os usuários do AsyncStorage:', error);
        return [];
    }
};

export const checkEmailExists = async (email) => {
    try {
        const usersJson = await AsyncStorage.getItem('users');
        const users = usersJson ? JSON.parse(usersJson) : [];
        return users.some(user => user.email === email);
    } catch (error) {
        console.error('Erro ao verificar se o e-mail existe:', error);
        return false;
    }
};

export const login = async ({ email, loginPassword }) => {
    try {
        const usersJson = await AsyncStorage.getItem('users');
        const users = usersJson ? JSON.parse(usersJson) : [];

        // Encontrar o usuário pelo email
        const user = users.find(u => u.email === email);

        // Verificar se o usuário foi encontrado
        if (!user) {
            throw new Error('Email não encontrado');
        }

        console.log('Usuário encontrado:', user);

        // Verificar se a senha está correta
        if (user.password !== loginPassword) {
            throw new Error('Senha incorreta');
        }

        console.log('Login bem-sucedido:', user);

        // Se chegou até aqui, o login foi bem-sucedido
        return user;
    } catch (error) {
        console.error('Erro ao tentar fazer login:', error);
        throw error;
    }
};