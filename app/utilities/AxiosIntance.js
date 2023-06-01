import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AxiosIntance = (contentType = 'application/json') => {
  const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.39:3000/api',
    //Home 192.168.1.39
    //School 172.16.66.115
    //HighLands 172.18.172.189
  });
  axiosInstance.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('token');
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': contentType,
      };
      return config;
    },
    err => Promise.reject(err),
  );
  axiosInstance.interceptors.response.use(
    res => res,
    err => Promise.reject(err),
  ); // callback
  return axiosInstance;
};

export default AxiosIntance;
