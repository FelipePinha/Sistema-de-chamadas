import axios from 'axios';

const fetchApi = axios.create({
    baseURL: 'http://localhost:3333/api',
});

export default fetchApi;
