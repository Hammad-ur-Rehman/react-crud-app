import axios from "axios";

const BASE_URL = 'http://localhost:3030';

export const getUsers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/users`);
        return res;
    } catch (error) {
        throw new Error(error);
    }
}