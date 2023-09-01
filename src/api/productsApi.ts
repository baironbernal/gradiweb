import axios from "axios";


export const productsApi = axios.create({
    baseURL: 'https://gradistore-spi.herokuapp.com/'
})
