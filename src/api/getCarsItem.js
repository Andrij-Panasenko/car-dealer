import axios from 'axios';

export const getCarsItem = async (limit) => {
  try {
    const response = await axios.get(`/cars?limit=${limit}`);

    return response.data;
  } catch (error) {
    console.log('Error getting cars:', error);
    throw error;
  }
};
