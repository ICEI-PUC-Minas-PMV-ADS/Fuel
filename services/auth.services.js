import API from './webapi.service';
import { BASE_URL } from './urls';

export const register = async (param) => {

    try {

        return await API.post(`${BASE_URL}/register`, param).then(
            response => {
                return response.data;

            },
            error => {
                console.log(error);
                return null;

            }
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}