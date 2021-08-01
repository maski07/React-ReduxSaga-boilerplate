import axios, { AxiosInstance, AxiosResponse } from "axios";
import { DomainUrl } from "../Common/Common";

const AxiosFactory = (): AxiosInstance => {
    // authToken
    const token = '';
    return axios.create({
        baseURL: DomainUrl,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
        },
        responseType: 'json'
    });
}

const Get = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory().get(endpoint, params);
}
const Put = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory().put(endpoint, params);
}
const Post = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory().post(endpoint, params);
}
const Delete = async <T>(endpoint: string, params: {} = {}): Promise<AxiosResponse<T>> => {
    return await AxiosFactory().delete(endpoint, params);
}

export const ApiCall = {
    Get,
    Put,
    Post,
    Delete,
} as const;
