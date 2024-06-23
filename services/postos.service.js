import API from './webapi.service';

export const getPostos = async () => {
    try {
        const response = await API.get('/postos');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os postos:', error);
        throw error;
    }
}

export const insertPostos = async (param) => {
    try {
        const response = await API.post('/postos', param);
        return response.data;
    } catch (error) {
        console.error('Erro ao inserir posto:', error);
        throw error;
    }
}

export const updatePostos = async (param) => {
    try {
        const response = await API.put(`/postos/${param.id}`, param);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar posto:', error);
        throw error;
    }
}

export const deletePostos = async (id) => {
    try {
        const response = await API.delete(`/postos/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar posto:', error);
        throw error;
    }
}
