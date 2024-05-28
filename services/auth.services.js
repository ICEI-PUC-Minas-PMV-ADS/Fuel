import API from './webapi.service';

export const register = async (param) => {

    try {

        return await API.post(`/users`, param).then(
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