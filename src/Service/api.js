import axios from 'axios';

const url = 'http://localhost:3003/papers';

export const getPapers = async (id)=>{

    id = id||'';
    return await axios.get(`${url}/${id}`);
}


export const addPaper = async (paper) => {
    return await axios.post(url,paper);
}


export const editPaper = async (id,paper) => {
 return await axios.put(`${url}/${id}`,paper);
}

export const deletePaper = async (id) => {
    return await axios.delete(`${url}/${id}`);
}