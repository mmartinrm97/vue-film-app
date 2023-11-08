import axios from 'axios';

const filmsApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});
export default filmsApi;