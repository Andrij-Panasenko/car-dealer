import axios from 'axios';

export const getOurCustomers = async () => {
  try {
    const response = await axios.get('/customers');

    return response.data;
  } catch (error) {
    console.log('Error getting cars:', error);
    throw error;
  }
};
