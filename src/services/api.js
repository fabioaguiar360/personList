import axios from 'axios';
// In the documentation of json server the  URL is http://localhost:3000 but it doesn't work.
// the solution was use http://10.0.2.2:3000/
const api = axios.create({
    baseURL: "http://10.0.2.2:3000/"
});

export default api;