import axios from 'axios';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignUp(data) {
  const URL = 'auth/signup';

  const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data).catch((error) => error.response);
  const axiosResponse = response.data;

  return axiosResponse;
}

export async function setLogin(data: LoginTypes) {
  const URL = 'auth/signin';

  const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data).catch((error) => error.response);
  const axiosResponse = response.data;

  return axiosResponse;
}
