import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export const getProfiles = async () => {
  try {
    const response = await axios.get(`${API_URL}/profiles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw error;
  }
};

export const addProfile = async (profile) => {
  try {
    const response = await axios.post(`${API_URL}/profiles`, profile);
    return response.data;
  } catch (error) {
    console.error('Error adding profile:', error);
    throw error;
  }
};

export const deleteProfile = async (id) => {
  try {
    await axios.delete(`${API_URL}/profiles/${id}`);
  } catch (error) {
    console.error('Error deleting profile:', error);
    throw error;
  }
};
