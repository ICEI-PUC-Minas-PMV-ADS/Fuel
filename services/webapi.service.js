import axios from 'axios';

// Atualize o BASE_URL para o endereço correto do servidor
export const BASE_URL = 'http://10.0.2.2:3000/'; // Para emulador Android, altere para 10.0.2.2
// Para iOS ou ambiente de produção, ajuste conforme necessário
// export const BASE_URL = 'http://127.0.0.1:3000/'; // Para iOS emulador ou localhost

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API;
