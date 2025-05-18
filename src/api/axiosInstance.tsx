import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true, // This sends cookies (JWT) along with the request
})

export default axiosInstance;