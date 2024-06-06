import axios from 'axios';

export const BASE_URL = 'https://sweet-jeans-laugh.loca.lt/'; // Alterar para a url gerada pelo localhost

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API;

/*Passos para a API funcionar
 1º - Abrir um terminar e inciar o db => json-server --watch db.json --host 127.0.0.1
 2º - Abrir um novo terminal e instalar o localtunnel =>  npm install -g localtunnel
 3º - Retornar ao terminal onde foi instalado o localtunnel e colocar => lt --port 3000
 Após ser gerado a url, substituir pela disponível na linha 3 dessa página.
 4º - Abra um novo terminal e rode o expo => npx expo start
*/
