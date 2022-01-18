import Client from "./api";

export const LoadAllSessions = async () => {
    try {
        const res = await Client.get(`/session`);
        return res.data;
    } catch (error) {
        throw error;
    };
};

export const LoadUserSessions = async (user_id) => {
    try {
        const res = await Client.get(`/session/user/${user_id}`);
        localStorage.setItem('sessions', JSON.stringify(res.data))
        return res.data;
    } catch (error) {
        throw error;
    };
};