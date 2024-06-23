import API from './webapi.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const register = async (param) => {
    try {
        // Adiciona 'role' ao objeto param, assumindo que o default é 'user'
        param.role = param.role || 'user';
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

export const login = async ({ email, password }) => {
    try {
        let usersJson = await AsyncStorage.getItem('users');
        let users = usersJson ? JSON.parse(usersJson) : [];

        // Verificar se o email está presente no AsyncStorage
        const user = users.find(u => u.email === email);

        if (!user) {
            throw new Error('Email não encontrado');
        }

        console.log('Senha digitada:', password);

        // Verificar se a senha está correta
        if (user.password !== password) {
            throw new Error('Senha incorreta');
        }

        console.log('Usuário encontrado:', user);

        // Atualizar o usuário no AsyncStorage
        await updateOrAddUser(user);

        console.log('Login bem-sucedido:', user);

        return user;
    } catch (error) {
        console.error(`Erro ao tentar fazer login: ${error.message}`);
        throw error;
    }
};

const updateOrAddUser = async (user) => {
    try {
        let usersJson = await AsyncStorage.getItem('users');
        let users = usersJson ? JSON.parse(usersJson) : [];

        const existingUserIndex = users.findIndex(u => u.id === user.id || u.email === user.email);

        if (existingUserIndex !== -1) {
            users[existingUserIndex] = user;
        } else {
            users.push(user);
        }

        await AsyncStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
        console.error('Erro ao atualizar o AsyncStorage:', error);
    }
};

