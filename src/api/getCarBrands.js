import axios from 'axios';

axios.defaults.baseURL = 'https://car-dealer-webserver.onrender.com/api';

export const getCarBrands = async () => {
  try {
    const response = await axios.get('/carbrands');

    return response.data;
  } catch (error) {
      console.log('Error getting cars:', error);
      throw error;
  }
};
