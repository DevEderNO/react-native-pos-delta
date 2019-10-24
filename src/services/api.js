import Axios from "axios";

const api = Axios.create({
    baseURL: 'http://10.30.0.168:8080'
});

export default api;