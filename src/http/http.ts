import { message } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { StoreTypes } from '@store/types';
import { getStorage } from '@utils/utils';
  
export interface PublicHttpType {
    code: number,
    message: string
}

const url = process.env.NODE_ENV === 'production' ? '开发环境'  : '生产环境'

const axiosInit = axios.create({
    baseURL:  url,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    withCredentials: process.env.NODE_ENV !== 'production' 
});

axiosInit.interceptors.request.use((config: AxiosRequestConfig) => {
    const _token = !!getStorage(StoreTypes.TOKEN);
    console.log(getStorage(StoreTypes.TOKEN), '_token')
    if(_token) {
        config.headers['token'] = getStorage(StoreTypes.TOKEN);
    }
    return config;
}, err => {
    Promise.reject(err);
});

axiosInit.interceptors.response.use(config => {
    switch (config.data.code) {
        case 200:
            return config.data.data ?? { code: 200 };
        case 5000:
            message.error(config.data.message);
            break;
        default:
            return config.data;
    }
}, (err) => {
    console.log(err.response.status, 'ttt');
    switch (err.response.status) {
        case 401:
            message.error('登录过期，请重新登录');
            setTimeout(() => {
                const _href = ( process.env.NODE_ENV !== 'production' ? location.origin + '/#/login' : location.origin + '/xsl/index.html#/login');
                location.href = _href;
            }, 1200);
            localStorage.removeItem(StoreTypes.TOKEN);
            break;
        case 403:
            message.error('没有权限，请联系管理员');
            break;
        case 404:
            message.error('请求错误');
            break;
        default:

            break;
    }
    return Promise.reject(err);
});


/**
 * 请求
 * @param {string} url 
 * @param {object} params 
 */
export const get = <T>(url:string, params = {}): Promise<T | any> => axiosInit({ url, params, method: 'GET' }) ;

export const post = <T>(url:string, data = {}): Promise<T | any> => axiosInit({ url, data: qs.stringify(data), method: 'POST' }) ;

export const put = <T>(url:string, data = {}): Promise<T | any> => axiosInit({url, data: qs.stringify(data), method: 'PUT'});

export const dele = <T>(url:string, params = {}): Promise<T | any> => axiosInit({ url, params, method: 'DELETE' });

/**
 * 上传图片
 * @param {string} param0  地址
 * @param {object} param1  请求头
 * @param {File}   param2  上传内容
 */
export const uploadFile  = ({ uploadUrl, headers, file }: {
    uploadUrl:string, headers: {
        Authorization: string,
        'x-oss-Date': string,
        'Content-Type':string,
        Date: string
    }, file: File
}) => axios({
    method: 'PUT',
    url: uploadUrl,
    withCredentials: false,
    headers,
    data: file
})