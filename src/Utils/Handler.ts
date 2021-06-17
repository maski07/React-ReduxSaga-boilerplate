import axios, { AxiosInstance, AxiosResponse } from "axios";

/**
 * AxiosFactory
 * @param endpoint 
 * @param params 
 * @returns 
 */
const AxiosFactory = (endpoint: string, params: {}): AxiosInstance => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        responseType: 'json'
    });
}

// 仮実装
export const Get = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory(endpoint, params).get(endpoint);
}
export const Put = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory(endpoint, params).put(endpoint);
}
export const Post = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory(endpoint, params).post(endpoint);
}
export const Delete = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory(endpoint, params).delete(endpoint);
}
