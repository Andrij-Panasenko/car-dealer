import axios from 'axios';

export const getCarsItem = async () => {
  try {
    const response = await axios.get('/cars');

    return response.data;
  } catch (error) {
    console.log('Error getting cars:', error);
    throw error;
  }
};
