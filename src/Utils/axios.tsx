import axios from "axios";



export const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 30000,
   
  });