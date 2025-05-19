import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://internship-backend-7y0d.onrender.com/api',
    withCredentials: true, // This sends cookies (JWT) along with the request
})

export default axiosInstance;