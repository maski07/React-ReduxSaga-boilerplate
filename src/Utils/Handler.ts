import axios, { AxiosInstance, AxiosResponse } from "axios";

const AxiosFactory = (): AxiosInstance => {
    // authToken
    const token = '';
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
        },
        responseType: 'json'
    });
}

// 仮実装
export const Get = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory().get(endpoint, params);
}
export const Put = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory().put(endpoint, params);
}
export const Post = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory().post(endpoint, params);
}
export const Delete = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory().delete(endpoint, params);
}