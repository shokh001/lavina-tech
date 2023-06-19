import axios from 'axios';

export const BaseUrl = "https://no23.lavina.tech"

const axiosInstance = axios.create({
    baseURL: BaseUrl,
});

export default axiosInstance;