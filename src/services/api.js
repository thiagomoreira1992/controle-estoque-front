import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.2.26:3333',
    headers : {'Content-Type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin' : '*'
    }
});

export default api;
