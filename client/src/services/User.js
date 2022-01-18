import Client from "./api";

export const LoadUserById = async (user_id) => {
    try {
        const res = await Client.get(`/user/${user_id}`);
        return res.data;
    } catch (error) {
        throw error;
    };
};