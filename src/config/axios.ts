import { getTokenCustom } from "@/actions";
import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
        'role' : 'admin'
    }
})

const createAuthInstance = async () => {
    try {
        const token = await getTokenCustom();
        return axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
            headers: {
                Authorization: `Bearer ${token}`,
                'role' : 'admin',
                'Content-Type': 'application/json'
            },
        })
    } catch (error) {
        console.error('Error getting token:', error);
        throw error
    }
};

export const getAxiosInstance = async () => {
    return await createAuthInstance()
};
