import axios, { AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';

export interface AuthorizationData {
  token: string;
}
const ApiClient = axios.create({
  baseURL: 'http://localhost:4200/api', // TODO: Need to load from env config.
  timeout: 100000,
  paramsSerializer: (params: any) => stringify(params, { arrayFormat: 'repeat' })
});

ApiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const authorizationData: AuthorizationData | null = { token: '' };
    if (authorizationData) {
      config.headers.Authorization = `Bearer ${authorizationData.token}`;
      config.headers['Authorization-Token'] = authorizationData.token;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default ApiClient;
