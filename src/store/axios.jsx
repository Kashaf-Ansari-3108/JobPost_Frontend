import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://pleasant-miniskirt-boa.cyclic.cloud/api/'
    baseURL: 'http://localhost:5000/api/'
})

export default instance;