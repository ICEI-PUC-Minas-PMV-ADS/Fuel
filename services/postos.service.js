import API from './webapi.service';
import { BASE_URL } from './urls'

export const getPostos = async () => {
    try{
        return await API.get(`${BASE_URL}/postos`).then(
            response =>{
                return response.data;
            },
            error =>{
                console.log(error);
                return null;
            }
        );
    }catch(error){
        console.log(error);
        return null;
    }
}


export const insertPostos = async (param) => {
    try{
        return await API.post(`${BASE_URL}/postos`, param).then(
            response =>{
                return response.data;
            },
            error =>{
                console.log(error);
                return null;
            }
        );
    }catch(error){
        console.log(error);
        return null;
    }
}

export const updatePostos = async (param) => {
    try{
        return await API.put(`${BASE_URL}/postos/${param.id}`, param).then(
            response =>{
                return response.data;
            },
            error =>{
                console.log(error);
                return null;
            }
        );
    }catch(error){
        console.log(error);
        return null;
    }
}

export const deletePostos = async (id) => {
    try{
        return await API.delete(`${BASE_URL}/postos/${id}`, param).then(
            response =>{
                return response.data;
            },
            error =>{
                console.log(error);
                return null;
            }
        );
    }catch(error){
        console.log(error);
        return null;
    }
}