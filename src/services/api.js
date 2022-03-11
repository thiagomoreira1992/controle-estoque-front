import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://192.168.2.26:3333',
=======
    baseURL: 'http://192.168.31.92:3333',
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df
    headers : {'Content-Type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin' : '*'
    }
});

<<<<<<< HEAD
export default api;
=======
export default api;
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df
