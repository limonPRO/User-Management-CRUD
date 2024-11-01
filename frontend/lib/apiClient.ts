import axios from "axios";

const apiClient = axios.create({
  baseURL:process.env.NEXT_PUBLIC_API_URL
});


export const get = async (endpoint: string) => {
    return await apiClient.get(endpoint);
  };
  
/* eslint-disable  @typescript-eslint/no-explicit-any */
  export const post = async (endpoint: string, data: any) => {
    return await apiClient.post(endpoint, data);
  };
  
  export const put = async (endpoint: string, data: any) => {
    return await apiClient.put(endpoint, data);
  };
  
  export const deleteApi = async (endpoint: string) => {
    return await apiClient.delete(endpoint);
  };
