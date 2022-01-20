import Client from './api';

export const LoadTagsByUserId = async (user_id) => {
  try {
    const res = await Client.get(`/tag/user/${user_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const AddTag = async (object) => {
  try {
    const res = await Client.post(`/tag/new`, object);
    return res.data;
  } catch (error) {
    throw error;
  }
};
