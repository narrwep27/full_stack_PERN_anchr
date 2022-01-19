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

export const UpdateSession = async (session_id, newTime, newTag_id) => {
    try {
        const res = await Client.put(`/session/${session_id}`, {
            timeSpent: newTime,
            tag_id: newTag_id
        });
        return res.data;
    } catch (error) {
        throw error;
    };
};

export const DestroySession = async (session_id) => {
    try {
        const res = await Client.delete(`/session/${session_id}`);
        return res.data;
    } catch (error) {
        throw error;
    };
};