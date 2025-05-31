import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.104:5000/api/',
    timeout: 60000,
});

export default instance;