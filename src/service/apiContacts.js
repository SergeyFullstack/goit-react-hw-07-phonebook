import axios from 'axios';

axios.defaults.baseURL = 'https://64a71b25096b3f0fcc811479.mockapi.io';

export const getContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteContact = async contactId => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const addContact = async contact => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
