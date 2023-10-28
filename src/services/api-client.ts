import axios from 'axios';
const URL=import.meta.env.VITE_RAWG_URL
const key=import.meta.env.VITE_RAWG_KEY
export const apiClient=axios.create({
    baseURL:URL,
    params:{
       key,
   
    }

})