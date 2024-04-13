import axios from "axios"

axios.defaults.baseURL = 'https://car-dealer-webserver.onrender.com';

export const getCarBrands = async () => { 
    const response = await axios.get("/carbrands");

    return response;
}