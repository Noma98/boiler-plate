import axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from './types';

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/user/login', dataToSubmit)
        .then(response => response.data);
    return {
        type: LOGIN_USER,
        payload: request,
    }
}
export async function registerUser(dataToSubmit) {
    try {
        const request = await (await axios.post('/api/user/join', dataToSubmit)).data;
        return {
            type: REGISTER_USER,
            payload: request,
        }
    } catch (err) {
        return {
            type: REGISTER_USER,
            payload: err,
        }
    }
}
