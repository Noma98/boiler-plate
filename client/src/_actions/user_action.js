import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types';

export async function loginUser(dataToSubmit) {
    const request = await axios.post('/api/user/login', dataToSubmit);
    return {
        type: LOGIN_USER,
        payload: request.data,
    }
}
export async function registerUser(dataToSubmit) {
    try {
        const request = await axios.post('/api/user/join', dataToSubmit);
        return {
            type: REGISTER_USER,
            payload: request.data,
        }
    } catch (err) {
        return {
            type: REGISTER_USER,
            payload: err,
        }
    }
}
export async function auth() {
    const request = await axios.get('/api/user/auth');
    return {
        type: AUTH_USER,
        payload: request.data
    }
}
